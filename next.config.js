/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  productionBrowserSourceMaps: true,
  // trailingSlash: true,       // alt klasör hostlarda genelde faydalı
};

module.exports = nextConfig
