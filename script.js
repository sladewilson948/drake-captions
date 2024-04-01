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
        const response = await fetch("https://sladewilson948.github.io/drake-captions/quotes.json");
        const json_data = await response.json();
        const list1 = json_data["quotes"]
        const idx = Math.floor(Math.random()*list1.length)
        const tag1 = document.getElementById("drake-caption")
        tag1.style.opacity = 0;

        // Wait for a short time to allow the text to fade out
        setTimeout(() => {
            // Change the text content
            tag1.textContent = "' " + list1[idx] + " '";
            
            // Fade in the new text
            tag1.style.opacity = 1;
        }, 500);

        
        
        
    } catch(error) {
        console.log("Error while fetching the caption: " + error.message);
    }
}



