import React, { useState, useContext } from "react";

import { RecipesContext } from "../context/RecipesContext";

export const RecipesList = () => {
  const infoRecipes = useContext(RecipesContext);
  const recipes = infoRecipes.recipes;

  const [currentRecipe, setCurrentRecipe] = useState("");
  const saveName = (recipeName) => {
    setCurrentRecipe(saveName);
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <p>{recipe.title}</p>
      ))}
    </div>
  );
};
