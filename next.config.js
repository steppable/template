// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // boilerplate: enable iframe embedding for website builder interface
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
