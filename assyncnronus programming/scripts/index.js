var list=[
        {
            imgLink: "https://tse4.mm.bing.net/th?id=OIP.tLU2NVsqhWLuiGykDAhQvwHaEc&pid=Api&P=0",
            Name: "RRR",
            reDate: "21-03-2022",
            Rating: "9.8",
        },
        {
            imgLink:"https://tse4.mm.bing.net/th?id=OIP.nAcopbzKUrXSA_ob9XcWoAHaFj&pid=Api&P=0",
            Name: "Pokiri",
            reDate: "12-07-2007",
            Rating: "9.0",
        },
        {
            imgLink: "https://tse4.mm.bing.net/th?id=OIP.pgkVYqoEfqWG148ILIoLCgAAAA&pid=Api&P=0",
            Name: "PUSHPA-The Rise",
            reDate: "20-12-2021",
            Rating : "8.5",

        },
        {
            imgLink: "https://tse1.mm.bing.net/th?id=OIP.7TJQSo13Ces37G2LVfxuOgHaEc&pid=Api&P=0",
            Name: "Rangasthalam",
            reDate: "14-10-2018",
            Rating: "7.5",
        },
        {
            imgLink: "https://tse1.mm.bing.net/th?id=OIP.ybjMnrE15zwxcUapgtbMSAHaFj&pid=Api&P=0",
            Name: "Bahubali-1",
            reDate: "24-06-2015",
            Rating: "8.3",
        },
        {
            imgLink: "https://tse1.mm.bing.net/th?id=OIP.YVy-mNjAnMyqTUXXwiYm2QHaEn&pid=Api&P=0",
            Name: "Bahubali-2",
            reDate: "04-04-2017",
            Rating: "8.8",
        },
        {
            imgLink: "https://tse2.explicit.bing.net/th?id=OIP.L3WOLLQ1jJWkaehq4FTXSQHaFj&pid=Api&P=0",
            Name: "Idiot",
            reDate: "14-08-2002",
            Rating: "7.6",
        },
        {
            imgLink: "https://tse2.mm.bing.net/th?id=OIP.uD7znCTOv3v0PY2vNo9bogHaFj&pid=Api&P=0",
            Name: "Chatrapathi",
            reDate: "17-10-2010",
            Rating: "8.0",
        },
        {
            imgLink: "https://tse2.mm.bing.net/th?id=OIP.ud0Ga6Ilbr9XqTRaRNq0WgHaFj&pid=Api&P=0",
            Name: "Temper",
            reDate: "19-01-2016",
            Rating: "8.2",
        }
    ];
var slides= 0;
setInterval(function(){
    var images=document.createElement("img");
    document.getElementById("slideshow").innerHTML = null;
    images.src = list[slides].imgLink;
    document.getElementById("slideshow").append(images);
    slides++;
    if(slides==list.length-1){
        slides=0;
    }
},2000);
    disFilms();
    function disFilms() {
        document.getElementById("movies").innerText= "";
        list.map(function (e){
            var box= document.createElement("div");
            var Img = document.createElement("img");
            var Name = document.createElement("h2");
            var reDate = document.createElement("h3");
            var Rating = document.createElement("h4");

            box.setAttribute("class", "main");
            Img.setAttribute("class", "img");
            Name.setAttribute("class", "Name");
            reDate.setAttribute("class", "reDate");
            Rating.setAttribute("class", "Rating");

            Img.src = e.imgLink;
            Name.innerText= e.Name;
            reDate.innerText= e.reDate;
            Rating.innerText= e.Rating;

            box.append(Img, Name, reDate, Rating);
            document.getElementById("movies").append(box);
        })
    }
    function low() {
        list.sort(function (i, j) {
            return i.Rating - j.Rating;
        });
        disFilms(list);
    }
    function high() {
        list.sort(function (i, j) {
            return j.Rating - i.Rating;
        });
        disFilms(list);
    }