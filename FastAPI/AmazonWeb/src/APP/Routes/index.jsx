import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../Screen/Login";
import SignUpPage from "../Screen/SignUp";
import ProductPage from "../Screen/Product";
import OrderPage from "../Screen/Order";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;