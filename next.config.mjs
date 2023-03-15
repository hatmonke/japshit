// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  env:{
    NEXT_APP_RPC_URL : "https://eth.llamarpc.com", //"https://bsc-dataseed.binance.org/" 'https://rpc-mainnet-cardano-evm.c1.milkomeda.com'
    INFURA_API_KEY: '3d6a6f42e8c54b039dacb97cfc6c1e58'
  },
  redirects: async () => {
    return [
      {
        source: '/swap',
        destination: '/',
        permanent: true,
      },
    ]
  }
};

export default config;
