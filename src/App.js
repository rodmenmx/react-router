import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/Home';
import ProductsPage from './routes/Products';
import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
