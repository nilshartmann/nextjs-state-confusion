/** @type {import('next').NextConfig} */
const nextConfig = {

  logging: {
    fetches: {
      fullUrl: true
    }
  }
//  experimental: {
//    serverActions: true, logging: {
//      level: "verbose"
//    },
//  }

}

module.exports = nextConfig
