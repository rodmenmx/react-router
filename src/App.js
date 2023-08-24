import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/Home';
import ProductsPage from './routes/Products';
import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';
import ProductDetailPage from './routes/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
