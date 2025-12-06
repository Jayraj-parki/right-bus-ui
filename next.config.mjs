import path from "path";

const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  onDemandEntries: {
    // Show full stacktrace in browser
    maxInactiveAge: 1000 * 60 * 60,
  },
 sassOptions: {
    includePaths: [path.join(process.cwd(), "src/styles")],
    // Auto-inject the theme and mixins into every SCSS file
    additionalData: '@use "var.module.scss" as *; @use "mixin.module.scss" as *;'
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(process.cwd(), "src")
    };
    return config;
  }
};

export default nextConfig;
