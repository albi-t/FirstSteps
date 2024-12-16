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
