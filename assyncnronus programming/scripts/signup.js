function Data(n, n1, e, p) {
    this.Name = n;
    this.Number = n1;
    this.eMail= e;
    this.passWord = p;
}
document.querySelector("form").addEventListener("submit", sendData);
function sendData() {
    event.preventDefault();
    var Name = document.getElementById("Name").value;
    var Number = document.getElementById("num").value;
    var eMail = document.getElementById("eMail").value;
    var passWord = document.getElementById("passWord").value;
    var User = new Data(Name, Number, eMail, passWord);
    var data = JSON.parse(localStorage.getItem("sign")) || [];
    data.push(User);
    localStorage.setItem("sign", JSON.stringify(data));
    document.getElementById("Name").value = "";
    document.getElementById("num").value = "";
    document.getElementById("eMail").value = "";
    document.getElementById("passWord").value = "";
    alert("Account created successfully, Go to Login page");
    window.location.href = "login.html"
}