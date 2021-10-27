let search = document.getElementById('search')
search.addEventListener('click', function () {
    console.log('clicked')
    fetch("https://proverbs.p.rapidapi.com/proverbs-api.php?includeSources=rumi%2Cemerson&searchTerm=love", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "proverbs.p.rapidapi.com",
            "x-rapidapi-key": "a5f22d021emsh4b092d88f86ee39p131048jsn622c5b1e4eb5"
        }
    })
        .then(response => {
           return response.json();
        }).then(data => {
           console.log(data)
        })
        .catch(err => {
            console.error(err);
        });
})