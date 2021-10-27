let container = document.querySelectorAll('.container');
let content = document.querySelectorAll('.content');
let key_Code = document.querySelectorAll('.key-Code');
let keyName = document.querySelectorAll('.keyName');
let key = document.querySelectorAll('.key span');
let code = document.querySelectorAll('.code span');
document.addEventListener('keydown', (e)=>{
   console.log(e);
    key_Code.innerHTML = e.keyCode;
    keyName.innerHTML = e.key;
    key.innerHTML = e.key;
    code.innerHTML = e.code;
   content.classList.add('active');
})
