/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    CONTACT_EMAIL_TEMP_ID: process.env.CONTACT_EMAIL_TEMP_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
};

export default nextConfig;
