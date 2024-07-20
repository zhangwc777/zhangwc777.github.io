import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/wuhu',
    component: ComponentCreator('/wuhu', '1ad'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fd2'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e9a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '558'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '401'),
                exact: true,
                sidebar: "开发文档"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
