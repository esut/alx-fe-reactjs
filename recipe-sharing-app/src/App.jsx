import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  )
}

export default App
