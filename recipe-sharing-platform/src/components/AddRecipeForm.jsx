import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required.';
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.trim().split('\n').length < 2) {
      newErrors.ingredients = 'At least two ingredients are required.';
    }

    if (!instructions.trim()) {
      newErrors.instructions = 'Instructions are required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setErrors({});

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
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
        {Object.keys(errors).length > 0 && (
          <div className="mb-4">
            {Object.values(errors).map((error, index) => (
              <p key={index} className="text-red-500">{error}</p>
            ))}
          </div>
        )}
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border rounded-lg shadow-sm ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-3 border rounded-lg shadow-sm ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter ingredients, one per line"
            rows="5"
          />
          {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full p-3 border rounded-lg shadow-sm ${errors.instructions ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter preparation steps, one per line"
            rows="5"
          />
          {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
