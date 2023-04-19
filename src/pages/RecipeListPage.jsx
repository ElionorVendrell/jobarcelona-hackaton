import React, { useState, useContext, useEffect } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { RecipeList } from "../components/RecipeList";

import { RecipesContext } from "../context/RecipesContext";

export const RecipeListPage = () => {
  const infoRecipes = useContext(RecipesContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    infoRecipes ? setLoading(false) : setLoading(true);
  }, []);

  return (
    <div>
      <Header />
      {loading ? <Loading /> : <RecipeList />}
      <Footer />
    </div>
  );
};
