import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";

export const RecipesList = () => {
  const infoRecipes = useContext(RecipesContext);
  const recipes = infoRecipes.recipes;

  return (
    <div>
      <div className='flex items-center justify-center'>
        <button
          type='submit'
          className=' btn btn-ghost mr-2 normal-case filter'
        >
          Gluten Free
        </button>

        <button
          type='submit'
          className='btn  btn-ghost mr-2 normal-case filter '
        >
          Vegan
        </button>

        <button
          type='submit'
          className='btn btn-ghost mr-2 normal-case filter '
        >
          Vegeterian
        </button>
      </div>

      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/RecipeDetail/${recipe.id}`}>
          <p>{recipe.title}</p>
        </Link>
      ))}
    </div>
  );
};
