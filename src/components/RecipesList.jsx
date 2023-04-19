import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
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
        <Link key={recipe.id} to={`/RecipeDetail/${recipe.id}`}>
          <p>{recipe.title}</p>
        </Link>
      ))}
    </div>
  );
};
