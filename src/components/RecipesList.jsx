import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";

import { MdRestaurant, MdAccessTime } from "react-icons/md";

export const RecipesList = () => {
  const infoRecipes = useContext(RecipesContext);
  const recipes = infoRecipes.recipes;
  const { loadMoreRecipes } = useContext(RecipesContext);

  const [glutenFreeSelected, setGlutenFreeSelected] = useState(false);
  const [veganSelected, setVeganSelected] = useState(false);
  const [vegetarianSelected, setVegetarianSelected] = useState(false);

  const handleFilterClick = (filterName) => {
    switch (filterName) {
      case "gluten-free":
        setGlutenFreeSelected(!glutenFreeSelected);
        break;
      case "vegan":
        setVeganSelected(!veganSelected);
        break;
      case "vegetarian":
        setVegetarianSelected(!vegetarianSelected);
        break;
      default:
        break;
    }
  };

  const filterRecipes = (recipe) => {
    if (veganSelected && !recipe.vegan) {
      return false;
    }
    if (glutenFreeSelected && !recipe.glutenFree) {
      return false;
    }
    if (vegetarianSelected && !recipe.vegetarian) {
      return false;
    }
    return true;
  };

  const handleShowMoreClick = () => {
    loadMoreRecipes(6);
  };

  return (
    <div>
      <h1 className='m-4 text-center mb-6'>Discover the best recipes</h1>

      <div className='flex items-center justify-center'>
        <button
          className={`filter ${
            glutenFreeSelected ? "filter-selected" : "filter"
          }`}
          onClick={() => handleFilterClick("gluten-free")}
        >
          Gluten Free
        </button>

        <button
          className={`filter ${veganSelected ? "filter-selected" : "filter"}`}
          onClick={() => handleFilterClick("vegan")}
        >
          Vegan
        </button>
        <button
          className={`filter ${vegetarianSelected ? "filter-selected" : ""}`}
          onClick={() => handleFilterClick("vegetarian")}
        >
          Vegeterian
        </button>
      </div>

      <div className='container mx-auto grid grid-cols sm:grid-cols-1 md:grid-cols-2 md:gap-20 lg:grid-cols-3  gap-4'>
        {recipes.filter(filterRecipes).map((recipe) => (
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
        <button onClick={handleShowMoreClick} className='btn'>
          Show More
        </button>
      </div>
    </div>
  );
};
