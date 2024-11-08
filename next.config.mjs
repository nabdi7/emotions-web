/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {unoptimized: true},
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "res.cloudinary.com",
    //       port: "",
    //     },
    //   ],
    // },
  };
  
  export default nextConfig;
  