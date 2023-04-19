import React, { useState, useContext, useEffect } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { RecipesList } from "../components/RecipesList";

import { RecipesContext } from "../context/RecipesContext";

export const RecipeListPage = () => {
  const infoRecipes = useContext(RecipesContext);
  const [loading, setLoading] = useState(!infoRecipes);

  useEffect(() => {
    setLoading(!infoRecipes);
  }, [infoRecipes]);

  return (
    <div>
      <Header />
      {loading ? <Loading /> : <RecipesList />}
      <Footer />
    </div>
  );
};
