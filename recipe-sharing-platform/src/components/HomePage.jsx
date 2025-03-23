import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-6 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Recipe List</h1>
        <Link
          to="/add-recipe"
          className="bg-white text-blue-500 py-2 px-4 rounded shadow hover:bg-gray-100"
        >
          Add Recipe
        </Link>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 mt-2">{recipe.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
