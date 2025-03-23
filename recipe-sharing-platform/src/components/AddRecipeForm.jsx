import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Navigate after form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }
    if (ingredients.split(",").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError(""); // Clear any previous error
    console.log({
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions: instructions.split(".").map((item) => item.trim()),
    });

    // Redirect to Home Page after submission
    alert("Recipe added successfully!");
    navigate("/");
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
          Preparation Steps (dot-separated)
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="e.g., Mix the ingredients. Bake at 180°C. Let it cool."
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
