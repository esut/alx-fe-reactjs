import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.filteredRecipes, recipe] // Update filtered recipes too
  })),

  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== recipeId)
  })),

  setRecipes: (recipes) => set(() => ({
    recipes,
    filteredRecipes: recipes 
  })),

  setSearchTerm: (term) => set((state) => {
    const newTerm = term.toLowerCase();
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(newTerm) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(newTerm)
      )
    );
    return { searchTerm: newTerm, filteredRecipes };
  }),

  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),

  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
