/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    CONTACT_EMAIL_TEMP_ID: process.env.CONTACT_EMAIL_TEMP_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default nextConfig;
