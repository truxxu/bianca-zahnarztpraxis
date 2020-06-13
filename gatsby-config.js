module.exports = {
  siteMetadata: {
    title: 'Bianca Weisz - Praxis für Zahnmedizin',
    author: 'Truxxu',
    description: 'Zahnarzt Hänigsen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Bianca-Zahnarztpraxis',
        short_name: 'Zahnarztpraxis',
        start_url: '/',
        background_color: '#07ACA7',
        theme_color: '#07ACA7',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo-s.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
