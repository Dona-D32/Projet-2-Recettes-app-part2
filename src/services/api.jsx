import { useQuery } from 'react-query';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export function useCategories() {
  return useQuery('categories', async () => {
    const response = await fetch(`${API_BASE_URL}/categories.php`);
    const data = await response.json();
    return data.categories;
  });
}

export function useCategoryRecipes(categoryId) {
  return useQuery(['categoryRecipes', categoryId], async () => {
    const response = await fetch(`${API_BASE_URL}/filter.php?c=${categoryId}`);
    const data = await response.json();
    return data.meals;
  });
}

export function useRecipeDetails(recipeId) {
  return useQuery(['recipeDetails', recipeId], async () => {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${recipeId}`);
    const data = await response.json();
    return data.meals[0];
  });
}
