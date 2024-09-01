import React, { useEffect } from 'react';

import { Link } from 'react-router-dom'; 

import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {


    filterRecipes(); 


  }, [filterRecipes]);

  return (
    <div>
      {recipes.length > 0 ? (

        recipes.map(recipe => (

          <div key={recipe.id}>
            <h3>

              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> 

            </h3>

            <p>{recipe.description}</p>

          </div>
        ))
      ) : (

        <p>No recipes found</p>

      )}
    </div>
  );
};

export default RecipeList;

