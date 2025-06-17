/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Générer un site statique
    distDir: 'out',    // Dossier de sortie pour les fichiers exportés
    images: {
      unoptimized: true,  // Désactive l'optimisation des images
    },
  };
  
  module.exports = nextConfig;
  