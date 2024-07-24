/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    missingSuspenseWithCSRBailout: false
  },
  // los repositorios de tipo [username].github.io no necesitan basePath
  basePath: "/nextjs-portfolio", //solo para este repositorio
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

};

export default nextConfig;


/* 
para usar searchParams(), 
pero la solucion no funciona en github pages (.github.io)
https://github.com/vercel/next.js/issues/61697
 */