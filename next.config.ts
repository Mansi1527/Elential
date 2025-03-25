import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required if using Next.js images
  },
};

export default nextConfig; // ✅ Ensure it's properly exported
