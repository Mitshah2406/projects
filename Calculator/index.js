const display = document.getElementById('display');
const input = document.getElementsByClassName('input')

input.addEventListener('click',()=>{
    let innertext = input.innerText;
    display +=innertext;
})