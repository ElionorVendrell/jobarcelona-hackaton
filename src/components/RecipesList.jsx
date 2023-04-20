import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";

import { MdRestaurant, MdAccessTime } from "react-icons/md";

export const RecipesList = () => {
  const infoRecipes = useContext(RecipesContext);
  const recipes = infoRecipes.recipes;

  return (
    <div>
      <h1 className='m-4 text-center mb-6'>Discover the best recipes</h1>

      <div className='flex items-center justify-center'>
        <p className='  mr-2 filter'>Gluten Free</p>
        <p className=' mr-2 filter '>Vegan</p>
        <p className='mr-2 filter '>Vegeterian</p>
      </div>

      <div className='container mx-auto grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mr-10 gap-4'>
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/RecipeDetail/${recipe.id}`}>
            <div className='card card-list w-96 bg-white shadow-xl mt-10'>
              <figure>
                <img src={recipe.image} alt='imagen receta' />
              </figure>
              <div className='card-body justify-center flex items-center'>
                <h2 className='card-title justify-center text-center mb-2'>
                  {recipe.title}
                </h2>

                <div className='card-actions justify-center'>
                  {recipe.glutenFree ? (
                    <div className='badge badge-outline'>Gluten Free</div>
                  ) : null}

                  {recipe.vegan ? (
                    <div className='badge badge-outline'>Vegan</div>
                  ) : null}
                  {recipe.vegetarian ? (
                    <div className='badge badge-outline'>Vegetarian</div>
                  ) : null}
                </div>

                <div className='flex flex-row items-center mt-2'>
                  <div className='flex flex-row items-center mr-4'>
                    <MdRestaurant className='type' />
                    <p className='type'>{recipe.servings}</p>
                  </div>
                  <div className='flex flex-row items-center mr-4'>
                    <MdAccessTime className=' type' />
                    <p className='type'>{recipe.readyInMinutes} min</p>
                  </div>
                  <p className='type'>{recipe.pricePerServing} $</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex justify-center items-center m-6'>
        <button className='btn'>Show More</button>
      </div>
    </div>
  );
};
