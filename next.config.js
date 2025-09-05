/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  productionBrowserSourceMaps: true,
  trailingSlash: true, // <— önemli
  // trailingSlash: true,       // alt klasör hostlarda genelde faydalı
};

module.exports = nextConfig
