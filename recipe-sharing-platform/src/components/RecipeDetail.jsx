import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {recipe.ingredients && (
        <>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </>
      )}

      {recipe.instructions && (
        <>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;
