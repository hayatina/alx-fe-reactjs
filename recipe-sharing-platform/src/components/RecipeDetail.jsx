import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the recipe ID from the route
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate(); // Optional: To navigate back to the HomePage

  useEffect(() => {
    // Find the recipe matching the ID
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      console.error("Recipe not found!");
    }
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded"
        />
        <h1 className="text-3xl font-bold mt-4 text-gray-800">
          {recipe.title}
        </h1>
        <p className="text-gray-700 mt-2">{recipe.summary}</p>
        <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Cooking Steps</h2>
        <ol className="list-decimal list-inside text-gray-600 mt-2">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
