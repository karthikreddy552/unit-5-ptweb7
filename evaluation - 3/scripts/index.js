fetch(`https://masai-api.herokuapp.com/hotels/search?city={query}`).then((resp) => {
    resp.json().then((data) => {
        console.log(data);
    })
})