const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liContainerEl = document.querySelector("#ingredients");
const makeLiEl = (ingredient) => {
const listEl = document.createElement('li');
listEl.textContent = ingredient;
listEl.classList.add('item');
return listEl;
};
const elements = ingredients.map(makeLiEl);
liContainerEl.append(...elements);
console.log(liContainerEl);
