/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
     async headers() {
          return [
               {
                    source: "/api/:path*",
                    headers: [
                         { key: "Access-Control-Allow-Origin", value: "*" },
                         {
                              key: "Access-Control-Allow-Methods",
                              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                         },
                         {
                              key: "Access-Control-Allow-Headers",
                              value: "X-Requested-With, Accept, Content-Type, Authorization",
                         },
                    ],
               },
          ];
     },
};
