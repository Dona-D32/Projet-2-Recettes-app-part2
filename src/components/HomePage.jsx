import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { useCategories } from '../services/api';

function HomePage() {
  const { data: categories } = useCategories();

  return (
    <div className="page-container">
      <h1 className="title">Free Meal API</h1>
      <h2>Categories</h2>
      <ul className="category-list">
        {categories && categories.map(category => (
          <li className="category-item" key={category.idCategory}>
            <Link to={`/category/${category.strCategory}`} className="category-link">
              {category.strCategory}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Favorites</h2>
      <Link to="/favorites" className="favorites-link">
        Go to Favorites
      </Link>
    </div>
  );
}

export default HomePage;
