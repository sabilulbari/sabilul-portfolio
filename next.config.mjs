/** @type {import('next').NextConfig} */
import tailwindcss from "@tailwindcss/vite";

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  plugins: [tailwindcss()],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
