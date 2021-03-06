export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'devto-clone',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,500,600&display=swap'
      }
    ]
  },

  loading: false, // disable loading bar

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/reset.scss',
    '~/assets/styles/base.scss',
    '~/assets/styles/highlight.scss',
    '~/assets/styles/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-placeholders.js',
    '~/plugins/vue-observe-visibility.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg', 
    '@nuxtjs/style-resources'
  ],

  // Style Resources
  styleResources: {
    scss: ['~/assets/styles/tokens.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
