const appendData =(arr,location)=>{
    location.innerHTML="";
    arr.map((ele)=>{
        location.innerHTML+=` <div>
        <img src="${ele.urls.regular}" alt="">
        <h3>${ele.user.name}</h3>

    </div>`
    })
}

export{appendData};