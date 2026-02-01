module.exports = {
  reactStrictMode: true,
  experimental: {
    serverExternalPackages: ['@remotion/renderer', '@remotion/bundler'],
  },
  images: {
    domains: ['example.com'],
  },
};
