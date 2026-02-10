import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!title.trim() || !ingredients.trim() || !instructions.trim()) {
      setError('All fields are required.');
      return;
    }

    const ingredientsList = ingredients.split('\n').filter((item) => item.trim() !== '');
    if (ingredientsList.length < 2) {
      setError('Please enter at least two ingredients.');
      return;
    }

    // If validation passes, clear error
    setError('');

    const newRecipe = {
      title,
      ingredients: ingredientsList,
      instructions,
    };

    console.log('New Recipe:', newRecipe);
    // Later: push into recipes list or save to backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      {/* Error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Title input */}
      <label className="block mb-2 font-semibold">Recipe Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2 mb-4"
        placeholder="Enter recipe title"
      />

      {/* Ingredients textarea */}
      <label className="block mb-2 font-semibold">Ingredients</label>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full border rounded p-2 mb-4"
        placeholder="List ingredients (one per line)"
        rows="4"
      />

      {/* Instructions textarea */}
      <label className="block mb-2 font-semibold">Preparation Steps</label>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="w-full border rounded p-2 mb-4"
        placeholder="Write preparation steps"
        rows="6"
      />

      {/* Submit button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
