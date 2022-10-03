function submit() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;



    let userData = JSON.parse(localStorage.getItem("users")) || [];

    function user(n, e, p) {
        this.name = n;
        this.email = e;
        this.password = p;
    }
    let u1 = new user(name, email, password);
    userData.push(u1);
    localStorage.setItem("users", JSON.stringify(userData));
    alert("Signup Succesfull")
}