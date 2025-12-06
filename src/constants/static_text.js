export const BRAND_NAME = "Right Bus";
export const STATIC_TEXT = {
  BRAND_NAME: BRAND_NAME,
  HERO_TITLE: "Regular trips to Europe & India",
  HERO_SUBTITLE: "Book ultra-affordable, instant bus tickets. Real-time seats, combos & GPS tracking.",
  FOOTER_CONTACT: "support@rightbus.com",
  FOOTER_PHONE: "+91-99999 99999"
};
export const NAV_LINKS = [
  { label: "landing", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Offers", href: "/#offers" },
  { label: "FAQ", href: "/#faq" },
  { label: "FAQ", href: "/faq" },
  { label: "Link4", href: "/link4" },
  { label: "Link5", href: "/link5" }
];
export const getPathByLevel = (pathname, level) => {
  const segments = pathname.split("/").filter(Boolean);
  const selected = segments.slice(0, level);
  return "/" + selected.join("/");
}