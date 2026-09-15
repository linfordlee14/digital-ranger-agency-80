const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const site = {
  name: "Linfy Tech Solutions",
  url: configuredSiteUrl || "https://linfytech.co.za",
  primaryCta: "Tell us what your business is doing manually.",
} as const;

export const navigation = [
  { href: "/solutions", label: "Solutions" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
] as const;
