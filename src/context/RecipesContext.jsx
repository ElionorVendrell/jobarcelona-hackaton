import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?number=10&apiKey=0f5894f887894038a3734c2b91ca0660"
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
