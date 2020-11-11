export default {
  target: 'static',
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
          "Duke Talent is a boutique search and consulting agency specializing in design, architecture and creative-minded brands."
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
      },
      {
        name: "og:description",
        content:
          "Duke Talent is a boutique search and consulting agency specializing in design, architecture and creative-minded brands."
      },
      { name: "og:url", content: `https://duketalent.agency/` },
      { name: "og:type", content: "website" },
      {
        name: "og:image",
        content: `https://davidparksdev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-05-29+at+11.51.12+AM.png`
      },
      {
        name: "og:image:secure_url",
        content: `https://davidparksdev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-05-29+at+11.51.12+AM.png`
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    /* module options */
    Inter: [300, 400, 600, 700],
    display: 'swap'
  },
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
    extend(config, ctx) {
      
    }
  }
};
