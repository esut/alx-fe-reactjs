import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {


    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
              <a href={`#`} className="text-blue-500 mt-2 inline-block">View Recipe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
