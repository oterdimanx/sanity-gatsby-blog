// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: 'Raiatea Immobilier',
    menuLinks:[
      {
         name:'accueil',
         link:'/'
      },
      {
         name:'Maisons à Vendre',
         link:'/maisons-a-vendre'
      },
      {
         name:'Maisons à Louer',
         link:'/maisons-a-louer'
      },
      {
         name:'Terrains',
         link:'/terrains'
      },
      {
         name:'Contact',
         link:'/contact'
      },
    ]
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
};
