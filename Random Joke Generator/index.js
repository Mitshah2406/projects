let populate = document.getElementById('populate');
let next = document.getElementById('next');

next.addEventListener('click',async ()=>{
    let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    let response = await fetch(url);
    let json = await response.json();
    populate.innerHTML = json.joke;
})