const { description } = require('../../package.json')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue.js Google maps',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#000' }],
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
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/assets/logo.jpg',
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Github',
        link: 'https://github.com/fawmi/vue-google-maps.git'
      }
    ],
    sidebar: [
      {
        title: 'Getting started',
        path: '/docs/',
        sidebarDepth: 2,
        collapsable: false,
        children: [
          '/docs/introduction',
          '/docs/getting-started',
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        path: '/components/',
        sidebarDepth: 2,
        children: [
          '/components/introduction',
          '/components/map',
          '/components/marker',
          '/components/info-window',
        ]
      },
      {
        title: 'Advanced',
        collapsable: false,
        path: '/advanced/',
        sidebarDepth: 2,
        children: [
          '/advanced/introduction',
        ]
      }
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
