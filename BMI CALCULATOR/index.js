let weight = document.getElementById('weight');
let height = document.getElementById('height');
let submit = document.getElementById('submit');
let flexContainer = document.getElementById('flexContainer');


submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (height.value == "" || weight.value == "") {
        setTimeout(() => {
            flexContainer.innerHTML = "";
        }, 1500);
        flexContainer.innerHTML = `<div class="solutionContainer" id="solutionContainer">
        <span class="bmiOutput">
        Please Enter Valid Input
        </span>
        </div>`
    }
    else {
        let solution = ((weight.value) / ((height.value / 100) * (height.value / 100))).toFixed(1);
        console.log(solution);
        let remark;
        if (solution < 18.5) {
            remark = "UnderWeight";
        }
        else if (solution > 18.5 && solution < 24.5) {
            remark = "Normal Weight";
        }
        else if (solution > 25 && solution < 29.5) {
            remark = "OverWeight";
        }
        else if (solution === 29.5 && solution < 29.5) {
            remark = "Obesity";
        }
        flexContainer.innerHTML = `<div class="solutionContainer" id="solutionContainer">
    <span class="bmiOutput">
    Your BMI Is <strong>${solution}</strong>
    </span>
    <span class="bmiRemark">
    Remark : <strong>${remark}</strong>
    </span>
    </div>`

        setTimeout(() => {
            flexContainer.innerHTML = "";
        }, 3000);
        weight.value = "";
        height.value = "";
    }
})

