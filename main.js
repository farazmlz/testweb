const p = document.querySelector('#main_p');
const input = document.querySelector('input');

input.addEventListener('input',()=>{
    p.textContent = input.value;
});