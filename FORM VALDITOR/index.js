let email = document.getElementById('email');
let phone = document.getElementById('phone');
let submit = document.getElementById('submit');
let Name = document.getElementById('name');
let form =document.getElementById('form')
let validUser = false;
let validEmail = false;
let validPhone = false;


Name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,15}$/;
    let str = Name.value;
    if (regex.test(str)){
        console.log('n-matched');
        Name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('n-unmatched');
        Name.classList.add('is-invalid');
        validUser = false;
    }
})


email.addEventListener('blur', () => { 
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)){
        console.log('e-matched');
        email.classList.remove('is-invalid'); 
        validEmail = true;
    }
    else{
        console.log('e-unmatched');
        email.classList.add('is-invalid'); 
        validEmail = false;
    }
})

phone.addEventListener('blur', () => { 
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)){
        console.log('p-matched');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('p-unmatched');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

submit.addEventListener('click', (e)=>{
    console.log('submit')
    e.preventDefault();
    let container = document.querySelector('#container');
    if(validUser&&validPhone&&validEmail){
        container.innerHTML = ``;
        html =`<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your Form Has Been Submitted.<strong>Click Cross To Dismiss!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
            container.innerHTML += html;
            form.reset();
        }
        else{
            container.innerHTML = ``;
            html =`<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> Your Form Has Been Submitted Because You Haven't Fulfilled All Requirements.<strong>Click Cross To Dismiss!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
            container.innerHTML += html;
            form.reset();
    }
})
