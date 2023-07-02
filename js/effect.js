const effect = {

    init: function(){
        
        effect.defineLocation();
        effect.handleClickAccordeon();
    },

    defineLocation: function(){
        
        const location = document.querySelector("#location");
        const tooltipText = document.querySelector("#tooltip-text");

        location.addEventListener("mouseover", ()=>{tooltipText.style.display = 'block';}, false);

        location.addEventListener("mouseleave", ()=>{tooltipText.style.display = "none";}, false);
    },

    handleClickAccordeon:function(){


 const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {

    header.addEventListener("click", function() {

      this.classList.toggle("active");

      const content = this.nextElementSibling;

    if (content.style.maxHeight) {

      content.style.maxHeight = null;

      this.querySelector("i").classList.remove("fa-angle-down");

      this.querySelector("i").classList.add("fa-angle-right");

    } else {

      content.style.maxHeight = content.scrollHeight + "px";

      this.querySelector("i").classList.remove("fa-angle-right");

      this.querySelector("i").classList.add("fa-angle-down");

            }
        });
    });
    }

}
