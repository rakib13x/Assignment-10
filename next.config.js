/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    domains: ["basic-blog.teamrabbil.com", "roar.media"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            // value: "SAMEORIGIN",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
