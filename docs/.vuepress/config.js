module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'StienenBE Component Library',
      description: 'Documentation site for the vue component library plugin'
    }
  },
  themeConfig: {
    repoLabel: 'Contribute!',
    // git repo here... gitlab, github
    repo: 'http://gitlab.stienenbe.com/farmconnect/component-lib',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'improve this page',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Components', link: '/components/' },
          // external link to git repo...again
          {
            text: 'GitLab',
            link: 'http://gitlab.stienenbe.com/farmconnect/component-lib'
          }
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: ['curve']
            }
          ]
        }
      }
    }
  }
}
