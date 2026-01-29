import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/auth/LoginPage';
import ProductsTable from './features/products/ProductsTable';
import ProductPreview from './features/products/ProductPreview';
import './App.css';


const Private = ({ children }) =>
  localStorage.getItem('token') ? children : <Navigate to="/login" />;


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <Private>
            <ProductsTable />
          </Private>
        }
      />
      <Route
        path="/preview/:id"
        element={
          <Private>
            <ProductPreview />
          </Private>
        }
      />
    </Routes>
  );
}