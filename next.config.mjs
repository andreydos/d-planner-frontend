/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CURRENT_DOMAIN: process.env.CURRENT_DOMAIN,
        COOKIE_SAME_SITE_MODE: process.env.COOKIE_SAME_SITE_MODE,
        API_URL: process.env.API_URL
    }
};
export default nextConfig;
