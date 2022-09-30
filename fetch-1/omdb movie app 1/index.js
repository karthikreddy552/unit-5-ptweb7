let movieName = document.querySelector("#movieName");
let searchBtn = document.querySelector(".btn");
let result = document.querySelector(".displayResult");


let movieList = () => {
    let searchedMovie = movieName.value;
    let movieUrl = `http://www.omdbapi.com/?t=${searchedMovie}&apikey=5f7aea23`;

    if (searchedMovie.length <= 0) result.innerHTML = `<h3 id="message">Please Enter a Movie Name..</h3>`;
    else {
        fetch(movieUrl).then(function(response) {
            response.json().then(function(data) {
                console.log(data);
                if (data.Response === "True") {
                    result.innerHTML = `
                        <div class="displayInfo">
                            <div class="displayImage"><img src=${data.Poster} class="image"></div>
                            <div class="contents">
                                <p class="title"><b>Title:  </b>${data.Title}</p>
                                <p class="title"><b>Director: </b>${data.Director}</p>
                                <p class="title"><b>Actors: </b>${data.Actors}</p>
                                <p class="title"><b>Released: </b>${data.Released}</p>
                                <p class="title"><b>Year: </b>${data.Year}</p>
                                <p class="title"><b>imdbRating: </b>${data.imdbRating}</p>
                                <p class="title"><b>Runtime: </b>${data.Runtime}</p>
                                <p class="title"><b>Awards: </b>${data.Awards}</p>
                                <p class="title"><b>Genre: </b>${data.Genre}</p>
                                <p class="title"><b>Language: </b>${data.Language}</p>
                                <p class="title"><b>Type: </b>${data.Type}</p>
                                <p class="title"><b>Writer: </b>${data.Writer}</p>
                                <p class="title"><b>Plot: </b>${data.Plot}</p>
                                
                            </div>
                            
                        </div>
                    `;
                    if (`${ data.imdbRating }` > 8.5) {
                        var rec = document.createElement("button");
                        rec.setAttribute("class", "recommended");
                        rec.textContent = `Recommended`;
                        result.append(rec);
                    }
                } else {
                    result.innerHTML = `<img class="notFound" src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif">`;
                    // result.innerHTML = `<h3 id="message">Movie NOT found!</h3>`;
                }

            }).catch(function() {
                result.innerHTML = `<h3 class="message">Error Occured</h3>`;
            });
        });
    }
}

searchBtn.addEventListener("click", movieList);
window.addEventListener("load", movieList);