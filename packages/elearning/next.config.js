/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	swcMinify: true,
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	optimizeFonts: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	env: {
		JWT_SECRET: process.env.JWT_SECRET,
		AWS_SES_USER: process.env.AWS_SES_USER,
		AWS_SES_PASSWORD: process.env.AWS_SES_PASSWORD,
		CLOUD_NAME: process.env.CLOUD_NAME,
		UPLOAD_PRESETS: process.env.UPLOAD_PRESETS,
		CLOUDINARY_URL: process.env.CLOUDINARY_URL,
		CLOUDINARY_VIDEO_URL: process.env.CLOUDINARY_VIDEO_URL,
		CLOUDINARY_ZIP_URL: process.env.CLOUDINARY_ZIP_URL,
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
		STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
	}
};

module.exports = {
	i18n: {
		locales: ['en', 'es', 'pt'],
		defaultLocale: 'en'
	}
}

module.exports = nextConfig;
