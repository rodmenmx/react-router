import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import HomePage from './routes/Home';
import ProductsPage from './routes/Products';

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/products" element={<ProductsPage />}></Route>
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
