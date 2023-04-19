import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?number=10&apiKey=4da130007da04d6da89d51251f3a2963"
      );
      setRecipes(response.data.recipes);
    };
    fetchRecipes();
  }, []);

  console.log("info", recipes);

  return (
    <RecipesContext.Provider value={{ recipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
