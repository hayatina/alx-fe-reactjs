import React, { useState, useEffect } from "react";
import data from "../data.json"; // Import JSON file directly

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the data directly from the imported JSON
    setRecipes(data);
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.summary}</p>
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{ width: "150px", height: "150px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
