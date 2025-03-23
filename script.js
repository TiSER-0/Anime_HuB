// Search Anime
function searchAnime() {
    let input = document.getElementById("search").value.toLowerCase();
    let animeList = document.getElementsByClassName("anime");

    for (let i = 0; i < animeList.length; i++) {
        let title = animeList[i].getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            animeList[i].style.display = "block";
        } else {
            animeList[i].style.display = "none";
        }
    }
}

// Watch Anime (Redirect Example)
function watchAnime(animeName) {
    alert("Streaming " + animeName + "...");
}
