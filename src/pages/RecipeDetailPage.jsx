import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { MdRestaurant, MdAccessTime } from "react-icons/md";
import { BsArrowLeftCircle } from "react-icons/bs";

import { Loading } from "../components/Loading";
import { RecipesContext } from "../context/RecipesContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
      <Header />

      <div className='card mx-auto card-detail bg-base-100 shadow-xl pb-10'>
        <Link to='/' className='flex flex-row items-center mt-10 ml-10'>
          <BsArrowLeftCircle className='back' />
        </Link>
        <div className=' grid h-auto place-items-center'>
          <h1 className='title title-detail text-center m-2 mt-6'>
            {recipeDetail.title}
          </h1>

          <figure className='mt-6'>
            <img className='rounded-3xl' src={image} alt='imagen receta' />
          </figure>
          <p style={{ fontSize: "14px" }} className='type ml-6 mr-6'>
            By {recipeDetail.creditsText}
          </p>

          <div className='flex flex-row items-center m-4 '>
            <MdRestaurant className='mr-2 type' />
            <p className='mr-10 type'>{recipeDetail.servings}</p>
            <MdAccessTime className='mr-2 type' />
            <p className='mr-10 type'>{recipeDetail.readyInMinutes} min</p>
            <p className='type'>{recipeDetail.pricePerServing} $</p>
          </div>

          <div className='card-actions justify-center'>
            {recipeDetail.glutenFree ? (
              <div className='badge badge-outline'>Gluten Free</div>
            ) : null}

            {recipeDetail.vegan ? (
              <div className='badge badge-outline'>Vegan</div>
            ) : null}
            {recipeDetail.vegetarian ? (
              <div className='badge badge-outline'>Vegetarian</div>
            ) : null}
          </div>

          <h2 className='mt-6 mb-6'>Ingredients</h2>
          <ul className='grid grid-cols gap-2 sm:grid-cols-1 md:grid-cols-2 mx-auto max-w-screen-lg'>
            {ingredients.map((recipe, index) => (
              <li
                key={index}
                className='ml-20 max-w-sm list-disc break-inside-avoid-column'
              >
                {recipe.original}
              </li>
            ))}
          </ul>

          <h2 className='mt-10 mb-6'>Instructions</h2>
          <p className=' pl-10 pr-10 md:mr-20 md:ml-20'>
            {cleanInstructions(recipeDetail.instructions)}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
