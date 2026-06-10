import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

const SELLAUTH_API_URL = process.env.SELLAUTH_API_URL!;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

function isValidCartItem(
  item: unknown,
): item is { productId: number; variantId: number; quantity: number } {
  if (!item || typeof item !== "object") return false;
  const i = item as Record<string, unknown>;
  return (
    typeof i.productId === "number" &&
    typeof i.variantId === "number" &&
    typeof i.quantity === "number"
  );
}

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: new URL(SITE_URL).hostname,
  });
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");
    const allowed =
      !origin || !referer
        ? false
        : origin === SITE_URL || referer.startsWith(SITE_URL);
    if (!allowed) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { cart, shopId } = body;

    if (
      !Array.isArray(cart) ||
      cart.length === 0 ||
      !cart.every(isValidCartItem)
    ) {
      return NextResponse.json({ error: "Invalid cart" }, { status: 400 });
    }
    if (typeof shopId !== "number") {
      return NextResponse.json({ error: "Invalid shopId" }, { status: 400 });
    }

    const challengeRes = await fetch(`${SELLAUTH_API_URL}/altcha`);
    const challenge = await challengeRes.json();

    const nonceBuf = Buffer.from(challenge.salt, "utf8");
    const targetHash = challenge.challenge;
    const maxnumber = challenge.maxnumber;
    let found = -1;

    for (let counter = 0; counter <= maxnumber; counter++) {
      const input = Buffer.concat([
        nonceBuf,
        Buffer.from(counter.toString(), "utf8"),
      ]);
      const hash = crypto.createHash("sha256").update(input).digest();
      if (hash.toString("hex") === targetHash) {
        found = counter;
        break;
      }
    }

    if (found === -1) {
      return NextResponse.json(
        { error: "Checkout unavailable" },
        { status: 500 },
      );
    }

    const payload = Buffer.from(
      JSON.stringify({
        algorithm: challenge.algorithm,
        challenge: challenge.challenge,
        number: found,
        salt: challenge.salt,
        signature: challenge.signature,
        took: 0,
      }),
    ).toString("base64");

    const checkoutRes = await fetch(`${SELLAUTH_API_URL}/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, shopId, altcha: payload }),
    });

    const data = await checkoutRes.json();

    if (!checkoutRes.ok || data.error) {
      return NextResponse.json(
        { error: "Checkout request failed" },
        { status: checkoutRes.status || 500 },
      );
    }

    return NextResponse.json({ url: data.url });
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
