console.log("Tata’s R&D department")

// using object.create() 
const tata_four_wheeler_automobiles = {
    wheels: 4,
    chassis:"Aluminium",
    NCAP_rating: "5 Stars",
    AC: true,
    country_of_origin: "India"
}

const Altroz = Object.create(tata_four_wheeler_automobiles)
Altroz.carName = "Altroz"
Altroz.carType = "Automatic"
Altroz.seats= 4;
console.log(Altroz)

const Harrier = Object.create(tata_four_wheeler_automobiles)
Harrier.carName="Harrier"
Harrier.carType ="Hybrid";
Harrier.seats= 5;
console.log(Harrier)


const Hexa = Object.create(tata_four_wheeler_automobiles)
Hexa.carName = "Hexa";
Hexa.carType = "Manual";
Hexa.seats=6;
console.log(Hexa)


const Nexon = Object.create(tata_four_wheeler_automobiles)
Nexon.carName = "Nexon";
Nexon.carType = "Automatic";
Nexon.seats= 4;
console.log(Nexon)


const Safari = Object.create(tata_four_wheeler_automobiles)
Safari.carName = "Safari"
Safari.carType = "Automatic"
Safari.seats=6;
console.log(Safari)
