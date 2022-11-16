// Кількість котегорій 
const catsEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${catsEl.length}`);
// назва категорії та кількість 
catsEl.forEach((cat) => {
console.log(`Category: ${cat.textContent}`);
const numbcatEl = cat.lastElementChild;
console.log(`Elements: ${numbcatEl.children.length}` );
});