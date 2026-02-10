import { useState, useEffect } from 'react';
import recipesData from '../data.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="m-4 rounded-lg shadow-lg bg-white p-4 transform transition duration-200 hover:scale-95">
          <Link to={'/recipe/${recipe.id'}>
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
          <div className='px-6 py-4'>
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">{recipe.title}</h2>
            <p className="text-gray-700 text-base">{recipe.summary}</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;


