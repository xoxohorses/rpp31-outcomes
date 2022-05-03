/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'clickup.com',
      'assets.stickpng.com',
      's29.q4cdn.com',
      'lfp4z1317gc22cff3hs4vn8x-wpengine.netdna-ssl.com',
      'upload.wikimedia.org',
    ],
  },
};

module.exports = nextConfig;
