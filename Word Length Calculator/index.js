countBtn.addEventListener('click', () => {
  let music =new Audio('click.mp3');
  music.play()
    let withWhitespaces = document.getElementById('withWhitespaces');
    let withoutWhitespaces = document.getElementById('withoutWhitespaces');
    let textarea = document.getElementById('textarea').value;
    let output = document.getElementById('output');
    let lengthWithSpaces;
    let lengthWithoutSpaces;
    let removeSpace;
    let html = '';
    output.innerHTML = html;
    try {
        if (withWhitespaces.checked) {
            lengthWithSpaces = textarea.length;
            console.log(lengthWithSpaces)
            html = `     <div class="row my-3">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                <h4>Output</h4>
                <hr>
                  <h5 class="card-title">Length Of Text Containing White Spaces</h5>
                  <p class="card-text">The Length of the entered text is <strong>${lengthWithSpaces}</strong> .</p>
                </div>
              </div>
            </div>
       </div>`
            output.innerHTML += html;

        }
        else if (withoutWhitespaces.checked) {
          let regex =/ /g;
            removeSpace = textarea.replace(regex,'');
            lengthWithoutSpaces = removeSpace.length;
            console.log(lengthWithSpaces)
            html = `     <div class="row my-3">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                <h4>Output</h4>
                <hr>
                  <h5 class="card-title">Length Of Text Without White Spaces</h5>
                  <p class="card-text">The Length of the entered text is <strong>${lengthWithoutSpaces}</strong> .</p>
                </div>
              </div>
            </div>
       </div>`
            output.innerHTML += html;
        }

    } catch (error) {
        output.innerHTML = error.message;
    }

})