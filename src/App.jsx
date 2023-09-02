import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import RecipePage from './components/RecipePage';
import './App.css'; 

const queryClient = new QueryClient(); 

function App() {
  return (
    <QueryClientProvider client={queryClient}> {}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
