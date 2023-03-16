/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    optimizeFonts: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        JWT_SECRET: 'asdfghjklnbvcxzqwertyuiopmkioprewqasderfgnujm',
        CLOUD_NAME: 'dnunzwnex',
        UPLOAD_PRESETS: 'images',
        CLOUDINARY_URL:
            'https://api.cloudinary.com/v1_1/dnunzwnex/image/upload',
        CLOUDINARY_VIDEO_URL:
            'https://api.cloudinary.com/v1_1/dnunzwnex/video/upload',
        CLOUDINARY_ZIP_URL:
            'https://api.cloudinary.com/v1_1/dnneps5f/raw/upload',
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.json$/,
            loader: 'json-loader',
            type: 'javascript/auto',
        });
        return config;
        }
};

module.exports = {
    i18n: {
        locales: ['en', 'es', 'pt'],
        defaultLocale: 'en',
    },
};

module.exports = nextConfig;
