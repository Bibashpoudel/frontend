/** @type {import('next').NextConfig} */
const nextSiteMap = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pacecode.com.np",
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ["/admin/*", "/terms&conditions", "/privacy-policy"],
};

module.exports = nextSiteMap;
