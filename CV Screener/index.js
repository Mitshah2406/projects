//https://randomuser.me/api/?results=100

// let image = document.getElementById('image');
let profile = document.getElementById('profile');
let nextBtn = document.getElementById('next');


nextBtn.addEventListener('click',show);

async function show(){
    const url = 'https://randomuser.me/api/?results=100';
    let response =  await fetch(url);
    let Data = await response.json();
    console.log(Data.results);
    let cvData = Data.results;
    let output;
    let number = Math.floor(Math.random())
    console.log(cvData)
        output += ` 
        <div class="container">
            <div class="card mt-4 bg-light">
                <ul class="list-group">
                    <li class="list-group-item"><h2>Name: ${cvData[number]['name']['first']}</h2></li>
                    <li class="list-group-item">Image:<br><img src=" ${cvData[number]['picture']['large']}"></img></li>
                    <li class="list-group-item">Phone Number: ${cvData[number]['cell']}</li>
                    <li class="list-group-item">DOB: ${cvData[number]['dob']['date']}</li>
                    <li class="list-group-item">Age: ${cvData[number]['dob']['age']}</li>
                    <li class="list-group-item">Email ID: ${cvData[number]['email']}</li>
                    <li class="list-group-item">Gender: ${cvData[number]['gender']}</li>
                    <li class="list-group-item">City: ${cvData[number]['location']['city']}</li>
                    <li class="list-group-item">Country: ${cvData[number]['location']['country']}</li>
                    <li class="list-group-item">PostCode: ${cvData[number]['location']['postcode']}</li>
                    
                </ul>
            </div>
        </div>`;
    profile.innerHTML = output;
}
