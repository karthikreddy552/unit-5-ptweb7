var itemarr = JSON.parse(localStorage.getItem("cart_items")) || [];
var url = "https://grocery-masai-api.herokuapp.com/items";
async function getitem() {


    var res = await fetch(url);
    var data = await res.json();
    Display(data.data);
    console.log(data.data);

}
getitem();

function Display(data) {
    data.map(function(element, box) {
        var card = document.createElement("div");
        card.setAttribute("class", "item");
        var image = document.createElement("img");
        image.setAttribute("class", "image");
        var price = document.createElement("p");
        price.setAttribute("class", "price");
        var name = document.createElement("p");
        name.setAttribute("class", "name");
        var button = document.createElement("button");
        button.setAttribute("class", "add_to_cart");
        button.textContent = "addtocart";
        button.addEventListener("click", function() {
            addtocart(element);
        });
        image.src = element.image;
        name.textContent = element.name;
        price.textContent = element.price;

        card.append(image, name, price, button);
        document.getElementById("groceries").append(card);


    })
}

function page(im, nm, pc) {
    this.image = im;
    this.name = nm;
    this.price = pc;


}

function addtocart(element) {
    var items = new page(element.image, element.name.ele.price);
    itemarr.push(items);
    localStorage.setItem("cart_items", JSON.stringify(itemarr));

}