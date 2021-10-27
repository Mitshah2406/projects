let startBtn = document.getElementById('startBtn');
let infoBox = document.getElementById('infoBox');
let exit = document.getElementById('exitBtn');
let continueBtn = document.getElementById('continueBtn');

startBtn.addEventListener('click',()=>{
    startBtn.style.display = 'none';
    infoBox.classList.add('activeInfo');
})
exit.addEventListener('click',()=>{
    infoBox.classList.remove('activeInfo');
    startBtn.style.display = 'block';
})