import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // State for tracking validation errors
  const navigate = useNavigate();

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients =
        "Please include at least two ingredients (comma-separated).";
    }
    if (!steps.trim()) {
      newErrors.steps = "Steps are required.";
    } else if (steps.split(".").length < 2) {
      newErrors.steps = "Please include at least two steps (dot-separated).";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Create new recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(".").map((item) => item.trim()),
      summary: "Newly added recipe",
      image: "https://via.placeholder.com/150", // Placeholder image
    };

    addRecipe(newRecipe); // Add the recipe using the function from props
    navigate("/"); // Redirect to Home Page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Add a Recipe</h1>
        {errors.general && (
          <p className="text-red-500 text-sm mb-4">{errors.general}</p>
        )}

        <label className="block mb-2 text-gray-700">
          Recipe Title
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
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
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
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
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
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
