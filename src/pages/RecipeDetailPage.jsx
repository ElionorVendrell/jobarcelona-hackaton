import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RecipesContext } from "../context/RecipesContext";

export const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState(null);

  const infoRecipes = useContext(RecipesContext);
  const recipes = infoRecipes.recipes;

  const cleanInstructions = (instructions) => {
    return instructions.replace(/<ol>|<\/ol>|<li>|<\/li>/g, "");
  };

  useEffect(() => {

    const recipesFromStorage = localStorage.getItem("recipes");
    if (recipesFromStorage) {

      infoRecipes.setRecipes(JSON.parse(recipesFromStorage));
    }
  }, []);

  useEffect(() => {

    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
    if (recipe) {

      localStorage.setItem("recipeDetail", JSON.stringify(recipe));
      setRecipeDetail(recipe);
    } else {

      const recipeDetailFromStorage = localStorage.getItem("recipeDetail");
      if (recipeDetailFromStorage) {
        setRecipeDetail(JSON.parse(recipeDetailFromStorage));
      }
    }
  }, [id, recipes]);

  if (!recipeDetail) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{recipeDetail.title}</h1>
      <p>{cleanInstructions(recipeDetail.instructions)}</p>
    </div>
  );
};
