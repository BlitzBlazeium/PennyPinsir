const currentUrl = window.location.href;
let urlArray = currentUrl.split("/");

const listGamesAPI = "https://www.cheapshark.com/api/1.0/games?";


function initialize() {
    console.log(window.location.href);
    if (urlArray[2] == "store.steampowered.com" && urlArray[3] == "app") {
        let steamAppID = urlArray[4];
        console.log("IM WORKING");

        fetch(listGamesAPI + "steamAppID=" + steamAppID)
            .then(response => {
                if (!response.ok) {
                    throw new Error('API Call One Failed.');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })


    }
    
    
}



document.getElementById("popup-content").onload(initialize);