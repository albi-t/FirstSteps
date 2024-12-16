const recipes = [];
const pantry = [];

document.getElementById('recipeForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('recipeTitle').value;
  const ingredients = document.getElementById('recipeIngredients').value.split(',').map(i => i.trim());
  const steps = document.getElementById('recipeSteps').value;

  recipes.push({ title, ingredients, steps });
  alert('Recipe added!');
});

document.getElementById('addIngredient').addEventListener('click', () => {
  const item = document.getElementById('pantryItem').value;
  if (item) {
    pantry.push(item.toLowerCase());
    updatePantryList();
  }
});

function updatePantryList() {
  const pantryList = document.getElementById('pantryList');
  pantryList.innerHTML = '';
  pantry.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    pantryList.appendChild(li);
  });
}

function getRecipeSuggestions() {
  const suggestions = recipes.map(recipe => {
    const missing = recipe.ingredients.filter(ing => !pantry.includes(ing.toLowerCase()));
    return {
      title: recipe.title,
      canMake: missing.length === 0,
      missing: missing
    };
  });

  displaySuggestions(suggestions);
}

function displaySuggestions(suggestions) {
  const recipeSuggestions = document.getElementById('recipeSuggestions');
  recipeSuggestions.innerHTML = '';
  suggestions.forEach(suggestion => {
    const li = document.createElement('li');
    li.innerHTML = suggestion.canMake 
      ? `<strong>${suggestion.title}</strong> - You can make this!` 
      : `<strong>${suggestion.title}</strong> - Missing: ${suggestion.missing.join(', ')}`;
    recipeSuggestions.appendChild(li);
  });
}

// Call this function when the pantry or recipes are updated

