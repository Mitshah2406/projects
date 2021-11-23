let timer = document.querySelector('.timer');
let textWrapper = document.querySelector('.text-wrapper');
let typedText = document.querySelector('#text');
let startBtn = document.querySelector('#buttonStart');
let typingArea = document.querySelector('.typing-area');
console.log(timer, textWrapper, typedText, startBtn, typingArea)
let seconds = 30;
startBtn.addEventListener('click', () => {
    typingArea.innerHTML = `    <textarea name="text" id="text" rows="5"  placeholder="Enter The Above Text As Fast As You Can" ></textarea>
    `;
    if (seconds > 0) {
        seconds--;
    }
    timer.innerHTML = `${seconds}s`
})

function timeCalc() {
    if (seconds > 0) {
        seconds--;
    }
    timer.innerHTML = `${seconds}s`
    
}