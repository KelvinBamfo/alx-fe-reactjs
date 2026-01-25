import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id), // cleanup
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      // Mock recommendation: suggest recipes with similar titles to favorites
      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );
      const recommended = state.recipes.filter(
        (r) =>
          !state.favorites.includes(r.id) &&
          favoriteRecipes.some((fav) =>
            r.title.toLowerCase().includes(
              fav.title.split(' ')[0].toLowerCase()
            )
          )
      );
      return { recommendations: recommended };
    }),
}));
