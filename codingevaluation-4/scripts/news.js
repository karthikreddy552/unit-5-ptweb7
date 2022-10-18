import { sidebar } from "../components/sidebar.js";


document.getElementById("sidebar").innerHTML = sidebar();

let userDetails = (user) => {

    document.getElementById("user_name").innerText = user.name;
    document.getElementById("user_email").innerText = user.email;
    document.getElementById("user_country").innerText = user.country;
    document.getElementById("user_image").src = user.image;




}
let user = JSON.parse(localStorage.getItem("user")) || {};

userDetails(user)

let appendData = (ele, location) => {
    location.innerHTML = "";



    let image = document.createElement("img");
    let title = document.createElement("h3");
    let description = document.createElement("h4");



    image.src = ele.urlToImage;
    title.innerText = ele.title;
    description.innerText = ele.description;

    location.append(image, title, description);

}
let news = JSON.parse(localStorage.getItem("news")) || {};

appendData(news, document.getElementById("detailed_news"));