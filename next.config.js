const withPWA = require("next-pwa");

module.exports = withPWA({
  trailingSlash: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});