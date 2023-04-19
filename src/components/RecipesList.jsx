import React, { useState } from "react";

export const RecipesList = () => {
  const [currentRecipe, setCurrentRecipe] = useState("");
  const saveName = (recipeName) => {
    setCurrentRecipe(saveName);
  };
  return <div>RecipesList</div>;
};
