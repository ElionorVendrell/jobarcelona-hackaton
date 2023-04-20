import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?number=12&apiKey=19bd693262d04d8e886acb3d0e0bb3f5"
      );
      setRecipes(response.data.recipes);
    };
    fetchRecipes();
    loadMoreRecipes(6);
  }, []);

  const loadMoreRecipes = async (count) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=${count}&apiKey=19bd693262d04d8e886acb3d0e0bb3f5`
      );
      const newRecipes = response.data.recipes;
      setRecipes([...recipes, ...newRecipes]); // Agrega las nuevas recetas al estado actual
    } catch (error) {
      console.log(error);
    }
  };

  console.log("info", recipes);

  return (
    <RecipesContext.Provider value={{ recipes, loadMoreRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
