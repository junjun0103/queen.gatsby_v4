module.exports = {
  siteMetadata: {
    title_en: `Queen's Travel`,
    title_cn: `群星旅游公司`,
    image: "/images/inner_big_logo_3.png",
    url: "http://queenstravel.com", // No trailing slash allowed!
    description_en: `Queens Travel has been providing quality service to ADS tour groups, Incentive groups and FITs for more than 18 years in New Zealand.`,
    description_cn: `位于南半球美丽的'千帆之都'——新西兰最大城市奥克兰的——群星旅游公司（Queens Travel）是一家在新西兰注册的旅行社.`,
    author: `@queen`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
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
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://stormy-cliffs-94333.herokuapp.com',
        collectionTypes: ['itinerary', 'feedback', 'theme-tour', 'tour-guide', 'tourist-information'],
        singleTypes: ['header'],
        // Extract images from markdown fields.
        // markdownImages: {
        //   typesToParse: {
        //     Article: ['body'],
        //     ComponentBlockBody: ['text'],
        //   },
        // },
        // Only include specific locale.
        locale: 'en', // default to all
        // Include drafts in build.
        preview: true, // defaults to false
        // Use application token.
        token: 'c07e06d6a4f74aaa392efb9ad87336dcbcb37ce7f7a0a2637cff685078385266cf735ef0a0773a69696dd4dc7437e663af20e564df698e97932be1292241737485393e8d53b5f4d51dfacc57444c2798f41d179653807d16a595b83f84fc93f0be08a3960515f74cb341f4e90fb8f3a90c2ecf2d7ce543e0c89c8b727708bcbb',


        // token: '2b8c8669762c8c30f270f9ab44433fd273d429720c086aae92bd40826b1c5beaa095af554c78066e302209a814e87c5340b57d8394fbfdcfbbaa257b1826577b91b2f6b81b38f2e3816bbf0719dee9433f52b7f236b51efadf8a69a971615cb9e5fd377f992453acb9c7a64ca209adf8ca3d4031d71b817edcd670d35a511680',

        //queen-> token: 'e615f3498dc84455ec8d7895a2e733b465103d271f8649f1b515163194aaa3030822fd09421b7a4c28adaf66ce7e9f0bacfc8579fb9b8c7b47f2c088e156acdf742b1f9bbfd53803a84ccf8785d924540c6905e1886b9627d99767c358d87ad306688d1fb7ab0986a4271aff273edba15b171a1a1b89c9184726acd07dbc51d1',
        //local-> token: '7d29f21cb5c12eecad06a0dd1df64965e089728397f8f72a07a5a95a2ee5908e7662a4d534406a1eaad872d0f4331962833c52cc79136e513f44df0ebb36f84ce122d911c36e9ce8f55e8d0e10a702c1e565659294f681f803b0aee9180ecb49427a6cff637663e604d4a74574a3cdc01126b2707c3dd18008526ecee6f7fa45',
        // Add additional headers.
        headers: {},
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#339966`,
        theme_color: `#339966`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
