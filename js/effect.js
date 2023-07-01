const effect = {

    init: function(){
        console.log("effect.init");
        
        effect.defineLocation();
    },

    defineLocation: function(){
        
        const location = document.querySelector("#location");
        const tooltipText = document.querySelector("#tooltip-text");

        location.addEventListener("mouseover", ()=>{tooltipText.style.display = 'block';}, false);

        location.addEventListener("mouseleave", ()=>{tooltipText.style.display = "none";}, false);
    },

}