export type Plan = {
  name: string;
  price: string;
  originalPrice?: string;
  stock?: number;
  description: string;
  perks: string[];
  href: string;
  popular?: boolean;
  productId?: number;
  variantId?: number;
  shopId?: number;
};

export type Reseller = {
  name: string;
  logo: string;
  official?: boolean;
  plans?: Plan[];
  priceRange?: string;
  href?: string;
  payments: string[];
};

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

export const resellers: Reseller[] = [
  {
    name: "Official",
    logo: "brand/icon.png",
    official: true,
    plans: [
      {
        name: "Weekly",
        price: "$8.00",
        originalPrice: "$10.00",
        stock: 36,
        description: "7 days of access",
        perks: ["All supported games", "No key system required"],
        href: "https://lumin-rocks.mysellauth.com/product/weekly",
        shopId: 243146,
        productId: 747755,
        variantId: 1226824,
      },
      {
        name: "Monthly",
        price: "$16.00",
        originalPrice: "$20.00",
        stock: 36,
        description: "30 days of access",
        perks: ["All supported games", "No key system required"],
        href: "https://lumin-rocks.mysellauth.com/product/monthly",
        popular: true,
        shopId: 243146,
        productId: 747756,
        variantId: 1226825,
      },
      {
        name: "Lifetime",
        price: "$32.00",
        originalPrice: "$36.00",
        stock: 36,
        description: "Permanent access",
        perks: [
          `Permanent access to ${SITE_NAME}`,
          "All supported games",
          "No key system required",
          "Priority support",
          "Early access to new features",
        ],
        href: "https://lumin-rocks.mysellauth.com/product/lifetime",
        shopId: 243146,
        productId: 747757,
        variantId: 1226826,
      },
    ],
    payments: ["Card", "Crypto"],
  },
];
