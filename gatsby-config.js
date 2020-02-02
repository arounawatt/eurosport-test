module.exports = {
  siteMetadata: {
    title: `Gatsby Starter - Eurosport Test`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@eurosportjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [
          `${__dirname}/node_modules/gridle/sass/gridle/_gridle.scss`,
          `${__dirname}/src/styles/config/01_variables/colors.common.scss`,
          `${__dirname}/src/styles/config/01_variables/fonts.common.scss`,
          `${__dirname}/src/styles/config/01_variables/sizes.common.scss`,
          `${__dirname}/src/styles/config/01_variables/spaces.common.scss`,
          `${__dirname}/src/styles/config/02_functions/font.common.scss`,
          `${__dirname}/src/styles/config/02_functions/palette.common.scss`,
          `${__dirname}/src/styles/config/03_mixins/accessible-invisibility.common.scss`,
          `${__dirname}/src/styles/config/04_settings/gridle.common.scss`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
