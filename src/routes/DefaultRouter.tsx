import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Catalog, ProductInfo, ProductStats  } from "../pages";

const DefaultRouter: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id/info" element={<ProductInfo  />} />
        <Route path="/product/:id/stats" element={<ProductStats />} />
    </Routes>
  );
};

export default DefaultRouter;
