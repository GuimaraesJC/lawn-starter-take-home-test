import { createBrowserRouter } from 'react-router'

import Layout from '../components/Layout'
import Main from '../pages/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />
      },
    ]
  }
])
