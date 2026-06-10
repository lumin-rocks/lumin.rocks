import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: `Purchase - ${SITE_NAME}`,
  description: `Buy access to ${SITE_NAME}, a premium Roblox script hub. Choose from weekly, monthly, or lifetime plans.`,
  openGraph: {
    title: `Purchase - ${SITE_NAME}`,
    description: `Buy access to ${SITE_NAME}, a premium Roblox script hub. Choose from weekly, monthly, or lifetime plans.`,
  },
};

export default function PurchaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
