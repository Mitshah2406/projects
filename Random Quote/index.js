let generateBtn= document.getElementById('generateBtn')

generateBtn.addEventListener('click', ()=>{
    fetch('https://type.fit/api/quotes')
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        console.log(data)
        let quoteTxt = document.getElementById("quoteTxt")
        let authorTxt = document.getElementById('authorTxt')
        let number = Math.floor(Math.random()*data.length);
        quoteTxt.innerHTML =`${data[number]['text']}`;
        authorTxt.innerHTML =`${data[number]['author']}`;
        });
    })


