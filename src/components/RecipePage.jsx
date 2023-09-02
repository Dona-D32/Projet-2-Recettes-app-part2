import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeDetails } from '../services/api';
import './RecipePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecipePage() {
  const { recipeId } = useParams();
  const { data: recipe } = useRecipeDetails(recipeId);

  const [ingredientsVisible, setIngredientsVisible] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(false);

  const toggleIngredientsVisibility = () => {
    setIngredientsVisible(!ingredientsVisible);
  };

  const toggleInstructionsVisibility = () => {
    setInstructionsVisible(!instructionsVisible);
  };

  return (
    <div className="page-container">
      {recipe && (
        <>
          <h1 className="recipe-title">{recipe.strMeal}</h1>
          <p className="recipe-category">Category: {recipe.strCategory}</p>
          {recipe.strMealThumb && (
            <img className="recipe-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
          )}
          <h2 className="ingredients-header" onClick={toggleIngredientsVisibility}>
            Ingredients
          </h2>
          {ingredientsVisible && (
            <ul className="ingredients-list">
              {Object.entries(recipe).map(([key, value]) => {
                if (key.startsWith('strIngredient') && value) {
                  const ingredientIndex = key.split('strIngredient')[1];
                  const measurement = recipe[`strMeasure${ingredientIndex}`];
                  return (
                    <li key={key} className="ingredient-item">
                      <span className="ingredient-measurement">{measurement}</span>
                      <span className="ingredient-space"> </span>
                      <span className="ingredient-name">{value}</span>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          )}
          <h2 className="instructions-header" onClick={toggleInstructionsVisibility}>
            Instructions
          </h2>
          {instructionsVisible && (
            <p className="recipe-instructions">{recipe.strInstructions}</p>
          )}
        </>
      )}
      <Link to="/" className="back-link">
        &larr; Back to categories
      </Link>
    </div>
  );
}

export default RecipePage;
