const { withSentryConfig } = require('@sentry/nextjs')

const HOST_MAPPINGS = [
  // {
  //   name: 'rogue-sharks',
  //   hostname: 'stake.roguesharks.org',
  // },
  // {
  //   name: 'Orbit',
  //   hostname: 'stake.unfrgtn.space',
  // },
  // {
  //   name: 'degengod',
  //   hostname: 'stake.degengod.xyz',
  // },
  // {
  //   name: 'plane-x',
  //   hostname: 'staking.plane-x.io',
  // },
  // {
  //   name: 'lil-weenees',
  //   hostname: 'stake.weenee.me',
  // },
  // {
  //   name: 'rebellionbots',
  //   hostname: 'stake.rebellionbots.io',
  // },
  {
    name: 'computation-units',
    hostname: 'compute.moonshinelabs.io',
  },
  {
    name: 'moonshine-labs',
    hostname: 'distill.moonshinelabs.io',
  },
  {
    name: 'moonshine-labs',
    hostname: 'stake.moonshinelabs.io',
  },
  {
    name: 'test-guys',
    hostname: 'research.moonshinelabs.io',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAINNET_PRIMARY: process.env.MAINNET_PRIMARY,
    MAINNET_SECONDARY: process.env.MAINNET_SECONDARY,
    GEO_LOCATION_API_KEY: process.env.GEO_LOCATION_API_KEY,
    BASE_CLUSTER: process.env.BASE_CLUSTER,
    BYPASS_REGION_CHECK: process.env.BYPASS_REGION_CHECK,
  },
}

module.exports =
  process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN
    ? withSentryConfig(nextConfig, {
        // Additional config options for the Sentry Webpack plugin. Keep in mind that
        // the following options are set automatically, and overriding them is not
        // recommended:
        //   release, url, org, project, authToken, configFile, stripPrefix,
        //   urlPrefix, include, ignore

        silent: true, // Suppresses all logs
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options.
      })
    : nextConfig
