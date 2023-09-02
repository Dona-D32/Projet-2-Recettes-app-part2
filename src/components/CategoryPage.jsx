import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCategoryRecipes } from '../services/api';
import './CategoryPage.css';

function CategoryPage() {
  const { categoryId } = useParams();
  const { data: recipes } = useCategoryRecipes(categoryId);

  return (
    <div className="page-container">
      <h1>Recipes in {categoryId} category</h1>
      <ul className="recipe-list">
        {recipes && recipes.map(recipe => (
          <li key={recipe.idMeal} className="recipe-item">
            <Link to={`/recipe/${recipe.idMeal}`} className="recipe-link">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-thumbnail" />
              <p className="recipe-name">{recipe.strMeal}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="back-link">&larr; Back to categories</Link>
    </div>
  );
}

export default CategoryPage;
