let input = document.getElementById('input');
let inputButton = document.querySelectorAll('.inputButton');
let clear = document.getElementById('clear');
let erase = document.getElementById('erase')
let equal = document.getElementById('equal');
window.onload = () => {
    input.value = "";
  };
inputButton.forEach((inputClass)=>{
    inputClass.addEventListener('click',()=>{
        console.log(inputClass.value);
        input.value += inputClass.value;
    })
})

clear.addEventListener('click',()=>{
    input.value = "";
})
erase.addEventListener('click',()=>{
    input.value = input.value.substr(0, input.value.length -1);
})
equal.addEventListener('click',()=>{
    try {
        let solution = eval(input.value);
        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else {
            input.value = solution.toFixed(2);
            input.value = solution;
        }
    } catch (error) {
        input.value = "Error - Enter Valid Expression";
    }
})