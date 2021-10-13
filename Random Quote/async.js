// let generateBtn = document.getElementById('generateBtn')
// async function generate() {
//     const response =await fetch('https://type.fit/api/quotes');
//     const quotes = await response.json();
//     console.log(quotes);
// };

// console.log(generate())

// generateBtn.addEventListener('click', generate.then(data=> {
//     console.log(data)
//     let quoteTxt = document.getElementById("quoteTxt")
//     let authorTxt = document.getElementById('authorTxt')
//     let number = Math.floor(Math.random() * data.length);
//     quoteTxt.innerHTML = `${data[number]['text']}`;
//     authorTxt.innerHTML = `${data[number]['author']}`;
// })
// );

let generateBtn= document.getElementById('generateBtn')

generateBtn.addEventListener('click', async ()=>{
    const res = await fetch('https://type.fit/api/quotes')
    const data = await res.json();
    console.log(data)

        let quoteTxt = document.getElementById("quoteTxt")
        let authorTxt = document.getElementById('authorTxt');
        let number = Math.floor(Math.random() * data.length);
        quoteTxt.innerHTML =`${data[number]['text']}`;
        authorTxt.innerHTML =`${data[number]['author']}`;
  
    })


