import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { RecipesContext } from "../context/RecipesContext";

export const RecipeDetailPage = () => {
  const { id } = useParams();

  const infoRecipes = useContext(RecipesContext);
  const recipes = infoRecipes.recipes;

  return <div>receta {id}</div>;
};
