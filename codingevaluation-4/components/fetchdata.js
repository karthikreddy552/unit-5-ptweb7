let fetchD = async(url) => {

    try {
        let res = await fetch(url);
        let data = await res.json();
        return data.articles;
    } catch (err) {
        console.log(err)
    }










}


export { fetchD }