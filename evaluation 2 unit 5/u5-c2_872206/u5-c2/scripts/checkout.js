function proceed() {
    var name = document.getElementById("user_name").value;
    var number = document.getElementById("user_number").value;
    var adress = document.getElementById("user_adress").value;
    event.preventDefault();
    setTimeout(function() {
        alert("Your order is confirmed")
    }, 0);
    setTimeout(function() {
        alert("Your order is being Packed")
    }, 3000);
    setTimeout(function() {
        alert("Your order is in transit")

    }, 8000);
    setTimeout(function() {
        alert(" Your order is out for delivery")

    }, 10000);
    setTimeout(function() {
        alert(" Order delivered")

    }, 12000);
    name.value = "";
    number.value = "";
    adress.value = "";


}