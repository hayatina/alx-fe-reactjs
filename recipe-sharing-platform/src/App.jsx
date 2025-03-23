import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import data from "./data.json"; // Import initial recipe data

function App() {
  const [recipes, setRecipes] = useState(data); // State to manage recipe list

  // Function to add a new recipe
  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage recipes={recipes} />} // Pass recipes as a prop
        />
        <Route
          path="/recipe/:id"
          element={<RecipeDetail recipes={recipes} />} // Pass recipes for details
        />
        <Route
          path="/add-recipe"
          element={<AddRecipeForm addRecipe={addRecipe} />} // Pass addRecipe function
        />
      </Routes>
    </Router>
  );
}

export default App;
