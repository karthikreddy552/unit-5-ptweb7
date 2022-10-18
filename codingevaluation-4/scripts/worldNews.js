import { sidebar } from "../components/sidebar.js";
import { fetchD } from "../components/fetchdata.js";



document.getElementById("sidebar").innerHTML = sidebar();


let UserDetails = (user) => {

    document.getElementById("user_name").innerText = user.name;
    document.getElementById("user_email").innerText = user.email;
    document.getElementById("user_country").innerText = user.country;
    document.getElementById("user_image").src = user.image;




}







let Func = async(value) => {

    try {
        let url = `https://masai-api.herokuapp.com/news/top-headlines?${value}`
        let res = await fetchD(url);
        appendData(res, document.getElementById("news_result"));

        console.log(res);
    } catch (err) {
        console.log(err)
    }


}
let Func2 = async(value) => {

    try {
        let url = `https://masai-api.herokuapp.com/news?q=${value}`
        let res = await fetchD(url);
        appendData(res, document.getElementById("news_result"));

        console.log(res);
    } catch (err) {
        console.log(err)
    }


}
let user = JSON.parse(localStorage.getItem("user")) || {};
Func(`country=${user.country}`)


UserDetails(user);
let appendData = (data, location) => {
    location.innerHTML = "";
    data.map((ele) => {

        let card = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h3");
        let author = document.createElement("p");

        card.setAttribute("class", "news");

        image.src = ele.urlToImage;
        title.innerText = ele.title;
        author.innerText = ele.author;

        card.append(image, title, author);
        card.addEventListener("click", () => {
            localStorage.setItem("news", JSON.stringify(ele))
            window.location.href = "news.html";
        })


        location.append(card);

    })







}
document.getElementById("in").addEventListener("click", () => {
    Func(`country=in`)
})
document.getElementById("nz").addEventListener("click", () => {
    Func(`country=nz`)
})
document.getElementById("us").addEventListener("click", () => {
    Func(`country=us`)
})
document.getElementById("uk").addEventListener("click", () => {
    Func(`country=uk`)
})
document.getElementById("ch").addEventListener("click", () => {
    initialFunc(`country=ch`)
})
document.getElementById("search_box").addEventListener("keypress", () => {
    if (event.key == "Enter") {
        let value = document.getElementById("search_box").value;
        Func2(value);
    }
})