console.log("This is still alive.")

const btn = document.getElementById('btn');
const txt = document.querySelector('.output');

btn.addEventListener('click', show);

function show(){
    const url = 'https://randomuser.me/api/?results=100';
    fetch(url).then(response =>{
        return response.json();
    }).then(data =>{

        let m_data = data.results;

        //Get Data Loop Through
        m_data.forEach(function (lists) {
            output += `
             <h2 style=text-align: "center">Get User Data</h2>
             <div class="container">
                 <div class="card mt-4 bg-light">
                     <ul class="list-group">
                         <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                         <li class="list-group-item"><img src="${lists.picture.large}"></li>
                         <li class="list-group-item">Phone Number: ${lists.cell}</li>
                         <li class="list-group-item">DOB: ${lists.dob.date}</li>
                         <li class="list-group-item">Age: ${lists.dob.age}</li>
                         <li class="list-group-item">Email ID: ${lists.email}</li>
                         <li class="list-group-item">Gender: ${lists.gender}</li>
                         <li class="list-group-item">City: ${lists.location.city}</li>
                         <li class="list-group-item">Country: ${lists.location.country}</li>
                         <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                     </ul>
                 </div>
             </div> `;
        });

        //Show On Our Screen All Data
        document.getElementById('output').innerHTML = output;
    })
}