// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: '/nextjs',
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: 'export',
  // basePath: '/erp',
  allowedDevOrigins: ['192.168.11.4','192.168.1.102','192.168.11.3',
    '192.168.11.2','192.168.11.6','192.168.100.3','192.168.1.107','192.168.11.5','192.168.1.106','192.168.1.112',
  '192.168.70.97'],
    turbopack: {
root: 'E:/NextJsStatic',
},
  images: {
    unoptimized: true,
  },
};

export default nextConfig;