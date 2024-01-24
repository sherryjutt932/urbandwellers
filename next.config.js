/** @type {import('next').NextConfig} */
const nextConfig = {};

// for dev
// module.exports = nextConfig;

module.exports = { 
    reactStrictMode: true, 
    images: {
        domains: ["urbandwellers.co"] 
    }
};
