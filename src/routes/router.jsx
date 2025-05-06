import { createBrowserRouter } from 'react-router-dom';
import Hero from '../page/Hero/Hero';
import UserLayout from '../layout/UserLayout';
import About from '../page/about/About';
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout/>,
    children: [
      {
        path: '/',
        element: <Hero/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
    ],
  },
  // Add more routes here
]);

export default router;