import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    // Create new recipe object
    const newRecipe = {
      id: Date.now(), // Generate a unique ID
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(".").map((item) => item.trim()), // Steps separated by dots
      summary: "Newly added recipe",
      image: "https://via.placeholder.com/150", // Placeholder image
    };

    addRecipe(newRecipe); // Call the addRecipe function from props
    navigate("/"); // Redirect to the Home Page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Add a Recipe</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <label className="block mb-2 text-gray-700">
          Recipe Title
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the recipe title"
          />
        </label>
        <label className="block mb-2 text-gray-700">
          Ingredients (comma-separated)
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., eggs, flour, sugar"
            rows={3}
          ></textarea>
        </label>
        <label className="block mb-2 text-gray-700">
          Cooking Steps (dot-separated)
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="e.g., Preheat oven. Mix ingredients. Bake for 20 minutes."
            rows={5}
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
