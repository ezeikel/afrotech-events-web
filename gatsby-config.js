require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Afrotech Events`,
    description: `Events, receptions, parties, and expo related offerings hosted by companies and groups during Afrotech. Also includes travel grants and scholarships, volunteer opportunities and ways to connect with other attendees. All events open to the public with the exception of those hosted by AfroTech itself.`,
    author: `@ezeikel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Heebo`,
            variants: [`400`, `500`, `700`, `800`, `900`]
          },
          {
            family: `Open Sans`,
            variants: [`400`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lm4d93bqs752`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "AFROTECH_EVENTS",
        // This is the field under which it's accessible
        fieldName: "afrotechEvents",
        // URL to query from
        url: process.env.NODE_ENV === 'production' ? "https://api.afrotech.events/graphql" : "http://localhost:7777/graphql",
      },
    },
  ],
}
