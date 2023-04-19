import React, { useState } from "react";

export const RecipeList = () => {
  const [currentRecipe, setCurrentRecipe] = useState("");
  const saveName = (recipeName) => {
    setCurrentRecipe(saveName);
  };
  return <div>RecipeList</div>;
};
