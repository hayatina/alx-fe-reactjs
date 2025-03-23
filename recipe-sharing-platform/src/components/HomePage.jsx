import React, { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data); // Load data.json
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-4xl font-bold m-8 p-5 text-gray-800">
        Recipe List
      </h1>
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
