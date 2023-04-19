import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MdRestaurant, MdAccessTime } from "react-icons/md";

import { Loading } from "../components/Loading";
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
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const urlImage = recipeDetail.image;
  const image = urlImage;
  const ingredients = recipeDetail.extendedIngredients;
  return (
    <div>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={image} alt='imagen del plato' />
        </figure>
        <div className='card-body'>
          <h1 className='card-title'>{recipeDetail.title}</h1>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Listen</button>
          </div>
        </div>
      </div>

      <h1>{recipeDetail.title}</h1>
      <img src={image} />

      {recipeDetail.glutenFree ? <p>gluten free</p> : null}
      {recipeDetail.vegetarian ? <p>vegetarian</p> : null}
      {recipeDetail.vegan ? <p>vegan</p> : null}

      <MdRestaurant />
      <p>{recipeDetail.servings}</p>

      <MdAccessTime />
      <p>{recipeDetail.readyInMinutes} min</p>

      <p>{recipeDetail.pricePerServing} $</p>

      <p>
        {ingredients.map((recipe) => (
          <li>{recipe.original}</li>
        ))}
      </p>
      <p>{cleanInstructions(recipeDetail.instructions)}</p>
    </div>
  );
};
