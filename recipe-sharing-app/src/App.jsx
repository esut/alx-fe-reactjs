import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';

import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
        
      </Routes>
    </Router>
  );
};

export default App;
