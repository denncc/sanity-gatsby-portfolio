export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff4d74b38faf60f3a9d0cd2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-y2k9ubcb',
                  apiId: '2ecbb495-3d4e-4a9c-b61d-c06a94d2c356'
                },
                {
                  buildHookId: '5ff4d74b8b042919f47ab54a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-39ey858y',
                  apiId: 'a30a14c0-bea8-48e9-a618-f1cf6f6b7413'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/denncc/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-39ey858y.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
