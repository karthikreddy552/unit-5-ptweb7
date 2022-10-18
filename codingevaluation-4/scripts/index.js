/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
class userDetails {

    constructor(name, image, email, country) {

        this.name = name;
        this.image = image;
        this.email = email;
        this.country = country;



    }

}



let store = () => {

    event.preventDefault();

    let image = document.getElementById("user_pic").value;
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let country = document.getElementById("user_country").value;
    document.getElementById("user_pic").value = "";
    document.getElementById("user_name").value = "";
    document.getElementById("user_email").value = "";
    // document.getElementById("user_country").value = "";

    let user = new userDetails(name, image, email, country);
    localStorage.setItem("user", JSON.stringify(user));






}




document.querySelector("form").addEventListener("submit", store)