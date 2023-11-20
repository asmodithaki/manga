module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },

  reactStrictMode: false,
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  images: {
    loader: "akamai",
    path: "/",
  },
  
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },

  generateBuildId: async ()  => {
    return process.env.GIT_HASH
  },

}
