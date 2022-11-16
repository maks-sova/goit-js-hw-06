const reft = {
    input: document.querySelector('input#name-input'),
    nameLable: document.querySelector('span#name-output')
};
reft.input.addEventListener('input', onInputEmpty);
reft.input.removeEventListener('input', onInputFull);
function onInputEmpty(event){
    reft.nameLable.textContent = event.currentTarget.value ? event.currentTarget.value  : 'Anonymous'
};
