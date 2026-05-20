import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { MainPage } from '../pages/MainPage/MainPage';
import { Privacy } from '../pages/Privacy/Privacy';
import { Error } from '../pages/Error/Error';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: 'privacy',
        Component: Privacy,
      },
      {
        path: '*',
        Component: Error,
      },
    ],
  },
]);
