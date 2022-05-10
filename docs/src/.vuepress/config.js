const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue 3 Google maps',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#2c3e50' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    logo: '/assets/logo.jpg',
    head: [
      ['meta', { name: 'theme-color', content: '#2c3e50' }],
    ],
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Github',
        link: 'https://github.com/fawmi/vue-google-maps'
      },
      {
        text: 'NPM',
        link: 'https://www.npmjs.com/package/@fawmi/vue-google-maps'
      }
    ],
    sidebar: [
      {
        title: 'Getting started',
        path: '/docs/',
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Components',
        collapsable: false,
        path: '/components/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/components/map',
          '/components/marker',
          '/components/info-window',
          '/components/cluster',
          '/components/circle',
          '/components/polygon',
          '/components/polyline',
          '/components/rectangle',
          '/components/autocomplete',
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        collapsable: false,
        sidebarDepth: 0,
        path: '/examples/',
        children: [
          '/examples/points-in-polygon',
          '/examples/how-to-access-google-maps-object',
          '/examples/how-to-add-custom-controls'
        ]
      },

    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
