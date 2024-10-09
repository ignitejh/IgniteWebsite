/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const path = require('path');
module.exports = {
    webpack: (config) => {
      config.resolve.symlinks = false;
      return config;
    },
  };