import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    
    const fetchedRecipe = data.find(recipe => recipe.id === parseInt(id));
    setRecipe(fetchedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={recipe.image} alt={recipe.title} className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
        <div className="md:w-1/2">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              
              <li>Example ingredient 1</li>
              <li>Example ingredient 2</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
              
              <li>Example step 1</li>
              <li>Example step 2</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
