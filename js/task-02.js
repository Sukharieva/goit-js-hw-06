const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")
ingredients.forEach((ingredient) => {
  const element = document.createElement("li")
  element.classList.add("item")
  element.textContent = ingredient
  list.appendChild(element)
})