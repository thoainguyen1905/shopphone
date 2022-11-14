/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@screen": path.resolve(__dirname, "src/screen"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@types": path.resolve(__dirname, "src/types"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
};
