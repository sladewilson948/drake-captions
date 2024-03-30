document.addEventListener("DOMContentLoaded", function() {

    getCaption()
    runeveryfourseconds()
    
})



function runeveryfourseconds()
{   
        setInterval(getCaption, 4000)
}



async function getCaption() {
    try {
        const response = await fetch("http://127.0.0.1:5500/captions/quotes.json");
        const json_data = await response.json();
        const list1 = json_data["quotes"]
        const idx = Math.floor(Math.random()*list1.length)
        const tag1 = document.getElementById("drake-caption")
        tag1.textContent = "' " + list1[idx] + " '"  + " - Aubrey Graham"
        
        
        
    } catch(error) {
        console.log("Error while fetching the caption: " + error.message);
    }
}



