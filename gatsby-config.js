const siteMetadata = {
  title: `CoderDojo Nijmegen`,
  siteUrl: `https://coderdojo-nijmagen.nl`,
  description: `Dit is de website van stichting CoderDojo Nijmegen`
};

module.exports = {
  siteMetadata,
  pathPrefix: "/gatsby-site",
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: `CoderDojo Nijmegen`,
        start_url: `/`,
        background_color: `#2d3748`,
        theme_color: `#f7fafc`,
        display: `standalone`,
        icon: `src/images/coderdojo.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'nl'
      }
    }
  ]
};