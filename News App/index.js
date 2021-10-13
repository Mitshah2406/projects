let newsCard = document.getElementById('newsCard');
console.log('India Times');

let apiKey = '65139976d2684dad9be43f240276e6f0';

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${apiKey}`, true);

xhr.onloadstart = function(){
    console.log('on progress')
    let spinner = `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`
  newsCard.innerHTML = spinner;
}

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let cardhtml = '';
        articles.forEach(function (element) {
            console.log(element);
            let card = `<div class="card mx-3 my-3" id="card" style="width: 25rem;">
            <img src="${element['urlToImage']}" class="card-img-top my-2" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${element['title']}</h5>
                                <p class="card-text">${element['description']}</p>
                                <a href="${element['url']}" target = "_blank" class="btn btn-primary">Read More</a>
                            </div>
                </div>`;
            cardhtml += card;
        });
        // console.log(articles)
        newsCard.innerHTML = cardhtml;
    }
    else {
        console.log('error')
    }
}
xhr.send();
