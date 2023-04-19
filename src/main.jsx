import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RecipesContextProvider from "./context/RecipesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipesContextProvider>
      <App />
    </RecipesContextProvider>
  </React.StrictMode>
);
