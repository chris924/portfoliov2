export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Chris Portfolio Site",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "GitHub",
      href: "https://github.com/chris924",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/krisztofer-burka-756658232/",
    },
  ],
  links: {
    github: "https://github.com/chris924",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
