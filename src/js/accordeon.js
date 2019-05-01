export function accordeon() {
        let acc = document.getElementsByClassName("accordeon");
          
        for (let i = 0; i <  acc.length; i++) {
          acc[i].addEventListener("click", function() {

            this.classList.toggle("active");        
            
            let panel = this.nextElementSibling;
            
            if (panel.style.display === "") {
                panel.style.display = "block";
                // console.log("1", panel);
            } 
            else if (panel.style.display === "block"){
                panel.style.display = "none";
                // console.log("2", panel);
            }
            else if (panel.style.display === "none"){
                panel.style.display = "block";
                // console.log("3", panel);
            }
          console.log("po", panel);
          });
        }
}
