import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientsList = ingredients
        .split('\n')
        .filter((item) => item.trim() !== '');
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please enter at least two ingredients';
      }
    }

    if (!instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split('\n').filter((item) => item.trim() !== ''),
      instructions,
    };

    console.log('New Recipe:', newRecipe);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <label className="block mb-2 font-semibold">Recipe Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2 mb-2"
        placeholder="Enter recipe title"
      />
      {errors.title && <p className="text-red-500 mb-4">{errors.title}</p>}

      <label className="block mb-2 font-semibold">Ingredients</label>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full border rounded p-2 mb-2"
        placeholder="List ingredients (one per line)"
        rows="4"
      />
      {errors.ingredients && <p className="text-red-500 mb-4">{errors.ingredients}</p>}

      <label className="block mb-2 font-semibold">Preparation Steps</label>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="w-full border rounded p-2 mb-2"
        placeholder="Write preparation steps"
        rows="6"
      />
      {errors.instructions && <p className="text-red-500 mb-4">{errors.instructions}</p>}

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

