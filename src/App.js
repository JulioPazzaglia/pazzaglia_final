import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppNavbar from "./componentes/appNavbar";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path='pazzaglia_final/' element={<Home />} />
        <Route
          path='pazzaglia_final/productos/:id'
          element={<ProductDetails />}
        />
        <Route path='pazzaglia_final/login' element={<Login />} />
        <Route path='pazzaglia_final/registro' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
