import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../store/favoritesSlice';
import './FavoritesPage.css';

function FavoritesPage() {
  const favorites = useSelector(state => state.favorites.favorites); 
  const dispatch = useDispatch();

  const removeFromFavorites = recipeId => {
    dispatch(removeFavorite(recipeId));
  };

  return (
    <div className="page-container">
      <h1>Favorites</h1>
      <ul className="favorite-list">
        {favorites.map(recipe => (
          <li key={recipe.idMeal} className="favorite-item">
            <p>{recipe.strMeal}</p>
            <button className="button" onClick={() => removeFromFavorites(recipe.idMeal)}>Remove</button>
          </li>
        ))}
      </ul>
      <Link to="/" className="back-link">
        &larr; Back to categories
      </Link>
    </div>
  );
}

export default FavoritesPage;
