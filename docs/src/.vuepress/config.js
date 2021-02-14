const { description } = require('../../package.json')

module.exports = {
  title: 'Vue 3 Google maps',
  description: description,
  base: '/',
  head: [
    ['meta', { name: 'theme-color', content: '#000' }],
  ],
  themeConfig: {
    repo: 'fawmi/vue-google-maps',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: 'Edit on github',
    lastUpdated: false,
    logo: '/assets/logo.jpg',
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'NPM',
        link: 'https://www.npmjs.com/package/@fawmi/vue-google-maps'
      }
    ],
    sidebarDepth: 0,
    collapsable: false,
    sidebar: [
      {
        title: 'Getting started',
        path: '/docs/',
      },
      {
        title: 'Components',
        collapsable: false,
        path: '/components/',
        children: [
          '/components/map',
          '/components/marker',
          '/components/info-window',
          '/components/cluster',
          '/components/polygon',
          '/components/rectangle',
        ]
      },
      {
        title: 'Advanced',
        path: '/advanced/',
        sidebarDepth: 0,
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
