/** @type {import('next').NextConfig} */

const next_config = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        port: "",
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname:
          "/bytewise0405/image/upload/v1703943033/Jay%20Kerkar/client-side/**",
      },
    ],
  },
};

module.exports = next_config;
