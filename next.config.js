/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'avatars.githubusercontent.com', 'clickup.com', 'assets.stickpng.com', 's29.q4cdn.com'],
  },
};

module.exports = nextConfig;
