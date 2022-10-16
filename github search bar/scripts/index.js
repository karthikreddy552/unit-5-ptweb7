import {navbar} from '../components/navbar.js';


document.getElementById("navbar").innerHTML=navbar();




const fetchData =async (e)=>{
    
    if(e.key=="Enter"){
        let value = document.getElementById("SearchBar").value;
        try{
            let res = await fetch(`https://api.github.com/users/${value}`);
            let data = await res.json();
            // appendData(data);
            // console.log(data);
            document.getElementById("profile").src=data.avatar_url;
            getRepo(data.repos_url);

        }
        catch(err){
            console.log(err);
        }
    }
    


}



document.getElementById("SearchBar").addEventListener("keypress",fetchData);



async function getRepo(url){
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1);
        appendRepo(data1);
    }catch(err){
        console.log(err);
    }
}


const appendRepo =(data)=>{

    let div = document.getElementById("repos");
    div.innerHTML="";
    data.map((ele)=>{
        div.innerHTML+=` <div>
        <a href="${ele.clone_url}"><h2>${ele.full_name}</h2></a> 
        <p>${ele.description}</p>
     </div>`
    })



}
