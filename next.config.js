/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/Portfolio',  // Le chemin de ton site sur GitHub Pages
    assetPrefix: '/Portfolio', // Cela garantit que les assets sont chargés correctement
    output: 'export',
    distDir: 'out',
  };
  
  module.exports = nextConfig;
  