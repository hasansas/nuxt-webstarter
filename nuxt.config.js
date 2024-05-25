import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 3355
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - WebStarter',
    title: 'WebStarter',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'vue-ssr-carousel/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // auth
  auth: {
    strategies: {
      facebook: {
        client_id: '254b62341ef7cb3f62bfa13884cb9e78',
        userinfo_endpoint: 'https://graph.facebook.com/me?fields=about,name,picture.typr(large){url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday'],
        redirectUri: '/authenticate/facebook',
      },
      google: {
        clientId: '159954148858-4tatmikbeiskvioogt2ui42v4djrmh32.apps.googleusercontent.com',
        codeChallengeMethod: '',
        responseType: 'code',
        // endpoints: {
        //   token: 'http://localhost:8000/user/google/', // somm backend url to resolve your auth with google and give you the token back
        //   userInfo: 'http://localhost:8000/auth/user/' // the endpoint to get the user info after you recived the token 
        // },
      }
    },
    redirect: {
      login: '/login',
      logout: '/logout',
      callback: '/authenticate',
      home: '/'
    },
  }
}
