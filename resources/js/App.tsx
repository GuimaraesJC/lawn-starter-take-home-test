import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router'
import '../css/app.css';
import './bootstrap';

import { router } from './routes';

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <RouterProvider router={router} />
  );
}
