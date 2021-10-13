console.log('Backgroung color changer')

let body = document.getElementsByTagName('body')
let btn = document.getElementById('btn')


btn.addEventListener('click',function changeBg(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = 'rgb(' + x + ',' + y + ',' + z + ')';
    document.body.style.background= color;
});