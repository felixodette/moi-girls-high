module.exports = {
  siteMetadata: {
    title: `Moi Girls High School - Eldoret`,
    description: `Welcome to Moi Girls High School - Eldoret, where excellence in education meets a vibrant community dedicated to nurturing young minds. Explore a dynamic learning environment that goes beyond textbooks, fostering holistic development through a commitment to Honor, Industry, and Courage. Join us on a journey of academic achievement, personal growth, and collaborative spirit. Discover the essence of education that shapes leaders, innovators, and compassionate individuals. Embrace a school where each student's unique potential is valued, celebrated, and guided towards a brighter future. Welcome to a place where knowledge transforms into wisdom, and friendships turn into lifelong bonds.`,
    author: `@gatsbyjs`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
