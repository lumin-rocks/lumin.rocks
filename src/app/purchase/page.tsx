"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Benefits from "@/components/purchase/benefits";
import Navbar from "@/components/layout/navbar";
import LifetimeCard from "@/components/purchase/lifetime-card";
import PlanCard from "@/components/purchase/plan-card";
import KeyCard from "@/components/purchase/key-card";
import SellerCard from "@/components/purchase/seller-card";
import Footer from "@/components/layout/footer";
import { resellers } from "@/data/resellers";

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

const official = resellers.find((r) => r.official);
const others = resellers.filter((r) => !r.official);
const lifetime = official?.plans?.find((p) => p.name === "Lifetime");

export default function Buy() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50",
          )}
        />

        <div className="min-h-screen w-full flex items-center justify-center px-6">
          <div className="flex flex-col items-center gap-8 w-full max-w-5xl py-24">
            <BlurFade delay={0.15}>
              <div className="text-center">
                <h1 className="text-4xl font-bold sm:text-5xl">
                  Buy {SITE_NAME}
                </h1>
                <p className="mx-auto mt-2 max-w-xl text-base text-muted-foreground">
                  Get access to {SITE_NAME}
                </p>
              </div>
            </BlurFade>

            <div className="mt-8 space-y-12">
              <BlurFade delay={0.25}>
                <Benefits />
              </BlurFade>

              <BlurFade delay={0.35}>
                {lifetime && <LifetimeCard plan={lifetime} />}
              </BlurFade>

              {official && (
                <BlurFade delay={0.45}>
                  <section>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {official.plans
                        ?.filter((p) => p.name !== "Lifetime")
                        .map((plan) => (
                          <PlanCard key={plan.name} plan={plan} />
                        ))}
                      <KeyCard />
                    </div>
                  </section>
                </BlurFade>
              )}

              {others.length > 0 && (
                <BlurFade delay={0.55}>
                  <section>
                    <div className="mb-4 flex items-center justify-center gap-2">
                      <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                        Other resellers
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {others.map((reseller) => (
                        <SellerCard key={reseller.name} reseller={reseller} />
                      ))}
                    </div>
                  </section>
                </BlurFade>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
