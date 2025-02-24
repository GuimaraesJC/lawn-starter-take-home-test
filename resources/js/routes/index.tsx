import { createBrowserRouter } from 'react-router'

import Layout from '../components/Layout'

import MainPage from '../pages/MainPage'
import PersonPage from '../pages/PersonPage'
import FilmPage from '../pages/FilmPage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: 'person/:id',
        element: <PersonPage />
      },
      {
        path: 'film/:id',
        element: <FilmPage />
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ]
  }
])
