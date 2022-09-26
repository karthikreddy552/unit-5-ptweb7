var itemarr = JSON.parse(localStorage.getItem("cart_items")) || [];
var tot = 0;
DisplayInCart(itemarr);

function DisplayInCart(data) {
    data.map(function(element, box) {
        var cards = document.createElement("div");
        cards.setAttribute("class", "item");
        var image = document.createElement("img");
        image.setAttribute("class", "image");
        var price = document.createElement("p");
        price.setAttribute("class", "price");
        var name = document.createElement("p");
        name.setAttribute("class", "name");
        var button = document.createElement("button");
        button.setAttribute("class", "remove");
        button.textContent = "remove";
        button.addEventListener("click", function() {
            removeeLement(box);
        })
        tot += element.price;
        document.getElementById("cart_total").innerHTML = tot;
        image.src = element.image;
        name.textContent = element.name;
        price.textContent = element.price;
        cards.append(image, name, price, button);
        document.getElementById("cart").append(cards)


    })

}

function removeeLement(box) {
    itemarr.splice(box, 1);
    localStorage.setItem("cart_items", JSON.stringify(itemarr));
    window.location.reload();
}