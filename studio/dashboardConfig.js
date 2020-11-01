export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f9efb0c6a9468f87f43e32f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7t41s6k4',
                  apiId: '4175d01f-c818-4843-8980-be0567792151'
                },
                {
                  buildHookId: '5f9efb0cb1c66607a579288f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6ybj2zgv',
                  apiId: '7515bcb2-6622-476f-aa41-8548d701b962'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JaimeVelasco/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6ybj2zgv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
