console.log('Library Website');

function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type
}

function Display(){

}

Display.prototype.add=function(book){
    let tbody = document.getElementById('tbody');
    let text = `<tr>
                            <th scope="row">1</th>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                    </tr>`
    tbody.innerHTML +=text;
}

Display.prototype.validate=function(book){
    if(book.name.length>2 || book.author.length>2){
        return true
    }
    else{
        return false
    }
}

Display.prototype.show=function(titlemsg,type, displayMessage){
    let message = document.getElementById('message');
    let innertxt = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    <strong>${titlemsg}!</strong> ${displayMessage}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div> `
    message.innerHTML += innertxt;
    setTimeout(function() {
    message.innerHTML ='';    
    }, 2000);
}

Display.prototype.clear=function(){
    let libraryform = document.getElementById('libForm');
    libraryform.reset();
}

let libform = document.getElementById('libForm');
libform.addEventListener('submit', libraryform);

function libraryform(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let technology = document.getElementById('technology');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (technology.checked) {
        type = technology.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    e.preventDefault();

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('Success','success','Your Book Has Been Added');
    }
    else{
        display.show('Warning','danger','Please fill valid Name Or Author Of Book')
    }
}
