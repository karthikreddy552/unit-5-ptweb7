import { navbar } from "../components/navbar.js";
import {fetchData} from "../components/fetchData.js"
import {appendData} from "../components/appendData.js"
sideBar.innerHTML = navbar();





const startingFetch =async(url)=>{
    try{

        let data = await fetchData(url)
        console.log(data);
        appendData(data,document.getElementById("body"));
    }
    catch(err){
        console.log(err);
    }
}
const accessKey = `DdvLC3EtuVdt6vQredEq_JzjdzV-1l-TOdgcQm2bRWo`;
startingFetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`);




const searchData =async(e)=>{
    
    if(e.key=="Enter"){
        let value = document.getElementById("searchInput").value;
        if(value==""){
            startingFetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`);
        }
        else{

            let data = await fetchData(`https://api.unsplash.com/search/photos?&query=${value}&client_id=${accessKey}`)
            console.log(data);
            appendData(data.results,document.getElementById("body"));
        }
    }
}
document.getElementById("searchInput").addEventListener("keypress",searchData);