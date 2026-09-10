const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wwbdataautomation.com";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@wwbdataautomation.com";

export const siteConfig = {
  name: "WWB DATA AUTOMATION",
  description:
    "End-to-end smart factory installation for small manufacturers, from on-site assessment and hardware to software, training, and support.",
  url,
  email,
  contactHref: `mailto:${email}?subject=${encodeURIComponent("Smart factory site assessment")}`,
} as const;
