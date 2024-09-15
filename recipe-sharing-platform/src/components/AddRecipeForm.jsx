import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setError('All fields are required.');
      return;
    }

    setError('');

    const newRecipe = {
      title,
      ingredients: ingredients.split('\n').map(ingredient => ingredient.trim()).filter(Boolean),
      instructions: instructions.split('\n').map(step => step.trim()).filter(Boolean),
    };

    console.log('New Recipe:', newRecipe);

    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter recipe title"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter ingredients, one per line"
            rows="5"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter preparation steps, one per line"
            rows="5"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
