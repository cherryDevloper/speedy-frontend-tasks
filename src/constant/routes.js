import React from 'react';
const Home = React.lazy(() => import('../pages/Home'));
const ArticleWriterPage = React.lazy(() =>
  import('../pages/ArticleWriterPage')
);
export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/addUser',
    element: <ArticleWriterPage />,
  },
];
