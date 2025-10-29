import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Headers de seguridad
  async headers() {
    return [
      {
        // Aplicar a todas las rutas
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Headers específicos para formularios
        source: '/contact',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        ],
      },
      {
        // Headers para API
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ]
  },

  // Rewrites para ocultar rutas API
  async rewrites() {
    return [
      {
        source: '/submit-form',
        destination: '/api/contact',
      },
    ]
  },
};

export default nextConfig;
