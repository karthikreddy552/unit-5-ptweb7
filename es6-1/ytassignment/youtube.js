let apiKey = "AIzaSyBHrr9znI5YWozH0zOvCeP0xuB1Io1xdNI";
let popularVideos = `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=50&key=${apiKey}&type=video`;

async function fetchUrl(url) {
    try {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data.items);
        displayToUI(data.items);
    } catch (err) {
        console.log(err);
    }
}
fetchUrl(popularVideos);

let displayToUI = (data) => {
    const displayDiv = document.querySelector(".videoContainer");
    displayDiv.innerHTML = "";
    data.map(ele => {
        displayDiv.innerHTML += `
            <div class="video" onclick="play('${ele.id.videoId}')">
                <img src="${ele.snippet.thumbnails.high.url}"
                    alt="" class="thumbnail">
                <div class="content">
                    <img src="${ele.snippet.thumbnails.high.url}"
                        alt="" class="channelIcon">
                    <div class="text">
                        <h4 class="title">${ele.snippet.title}</h4>
                        <p class="channelName">${ele.snippet.channelTitle}</p>
                    </div>
                </div>
            </div>
        `;
    })
    document.querySelector("iframe").style.display = "none";
}

function play(videoId) {
    console.log(videoId);
    document.querySelector("iframe").style.display = "block";
    document.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    let btn = document.querySelector(".cross");
    btn.style.display = "block";
    btn.addEventListener("click", hideIFrame);
}

function hideIFrame() {
    document.querySelector("iframe").style.display = "none";
    btn.style.display = "none";
}
document.getElementById("searchBtn");
async function searchVideoIN() {
    const val = document.getElementById("search").value;
    const searchVid = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${val}&type=video&key=${apiKey}`);
    let data = await searchVid.json();
    displayToUI(data.items);
}