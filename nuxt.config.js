export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Duke Talent | Boutique Search and Consulting Agency",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Duke Talent is a boutique search and consulting agency specializing in design, architecture and creative-minded brands. "
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "duke talent, agency, creative agency, boutique agency, duke butler"
      },
      {
        name: "og:title",
        content: `Duke Talent | Boutique Search and Consulting Agency`
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/sitemap"],

  sitemap: {
    hostname: "https://duketalent.agency/",
    gzip: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
