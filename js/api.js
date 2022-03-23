async function  searchMovie() {

    searchQuery = document.querySelector('.search-box').value
    console.log("procurando por " + searchQuery)
    const request = await fetch("https://imdb-api.com/en/API/Search/k_gzih4xwo/"+searchQuery, {
        "method": "GET",
        "headers": {
            'Accept': 'application/json'
        }
    });
    movies = await request.json();
    console.log(movies)
  
    for (let i = 0; i<movies['results'].length; i++){
        console.log(movies['results'][i]['image'])
        console.log("forrrrrrrrrrrrr")
        temp = `<div class="item">
            <img src="`+movies['results'][i]['image'] +`"  class="box-filme" alt="" srcset="">
        </div>`
        document.querySelector('.search-movies').innerHTML += temp
    }
}