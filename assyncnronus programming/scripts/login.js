var data = JSON.parse(localStorage.getItem("sign")) || [];
document.querySelector("form").addEventListener("submit", recieveData);
function recieveData() {
    event.preventDefault();
    var eMail = document.getElementById("eMail").value;
    var passWord = document.getElementById("passWord").value;
        if(eMail!==eMail || passWord!==passWord) {
            alert("Invalid Data");
        }
        if(eMail===eMail && passWord===passWord){
            alert("Login Successfull, Go to Home page");
            window.location.href = "index.html";
        }
};