let searchtxt = document.getElementById('searchtxt');
let searchbtn = document.getElementById('searchbtn');
let displayContainer = document.getElementById('display-container');

searchbtn.addEventListener('click',async ()=>{
    displayContainer.innerHTML = "";
    console.log(searchtxt.value);
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchtxt.value}`,{mode :"cors"});
    let json = await response.json();
    console.log(json);
    let output = `<div class="card my-4" style="width: 45rem;">
        <div class="card-body">
      <h5 class="card-title"><span>Word: </span>${searchtxt.value}</h5>
      <p class="card-text"><span>Meaning: </span>${json[0]["meanings"][0]["definitions"][0]["definition"]}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><span>Example:</span> ${json[0]["meanings"][0]["definitions"][0]["example"]}</li>
      <li class="list-group-item" style="display: flex;flex-direction: row;justify-content: flex-start;align-items: center;"><span>Parts Of Speech: </span><audio controls>
      <source src="${json[0]['phonetics'][0]['audio']}" type="audio/mp3">
    </audio></li>
      <li class="list-group-item"><span>Synonyms: </span> ${json[0]["meanings"][0]["definitions"][0]["synonyms"]}</li>
    </ul>
  </div>`
  displayContainer.innerHTML += output;
 })





    
