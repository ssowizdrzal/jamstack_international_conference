module.exports = {
  siteMetadata: {
    title: `ISAT Conference`,
    description: `Placeholder`,
    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: `5AWg24027HtqkjKm2gExsAtt`,
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      }
    },
    `gatsby-plugin-postcss`
  ],
}
