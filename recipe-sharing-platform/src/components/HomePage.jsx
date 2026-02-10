import { useState, useEffect } from 'react';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;


