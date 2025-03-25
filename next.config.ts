/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required if using Next.js images
  },
};

module.exports = nextConfig;
