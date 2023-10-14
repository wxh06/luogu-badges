/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lglg.top",
        port: "",
        pathname: "/piterator-x-exlg.svg",
      },
    ],
  },
};

module.exports = nextConfig;
