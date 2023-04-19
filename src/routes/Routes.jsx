import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RecipeListPage } from "../pages/RecipeListPage";
import { RecipeDetailPage } from "../pages/RecipeDetailPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<RecipeListPage />} />
      <Route path='/RecipeDetail/:id' element={<RecipeDetailPage />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
