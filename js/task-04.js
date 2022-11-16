const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const value = document.querySelector('#value');
const wrapper = document.querySelector('#counter');

let conterValue = 0;
const increment = () => {
conterValue += 1;

value.textContent = conterValue;
};
const decrement = () => {
    conterValue -= 1;
    
    value.textContent = conterValue;
};
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

