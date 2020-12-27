export default {
  widgets: [
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
                  buildHookId: '5fe8a1daa3b5c8db047dfb09',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6he1p2yf',
                  apiId: 'de875efc-126e-4d21-b474-1a6040baf7d6'
                },
                {
                  buildHookId: '5fe8a1da605fe16273a29b4d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mhfpfp4s',
                  apiId: 'e60b1e9e-45e8-4d1f-8fdc-695e88de78d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jr-b/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mhfpfp4s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
