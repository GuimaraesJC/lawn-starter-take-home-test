import { createBrowserRouter } from 'react-router'

import Layout from '../components/Layout'

import Main from '../pages/Main'
import PersonPage from '../pages/PersonPage'
import FilmPage from '../pages/FilmPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'person/:id',
        element: <PersonPage />
      },
      {
        path: 'film/:id',
        element: <FilmPage />
      },
    ]
  }
])
