const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  register: true,
  skipWaiting: true,
});
module.exports = withPWA({
  trailingSlash: true,
  transpilePackages: [
    '@fullcalendar/react',
    '@fullcalendar/daygrid',
    '@fullcalendar/list',
    '@fullcalendar/google-calendar',
  ],
  output: 'export',
});
