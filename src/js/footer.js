const menuIcon = document.getElementById("menu");
const footer = document.getElementById("footer");

menuIcon.addEventListener("click", function(){
    let cl = footer.classList;    
    if (!cl.contains("fade-in-bottom") && !cl.contains("fade-out-bottom")) {
        footer.style.display = "flex";
        cl.add("fade-in-bottom");

    } else if(cl.contains("fade-in-bottom")){
        cl.remove("fade-in-bottom");
        cl.add("fade-out-bottom");
        setTimeout(function(){
            footer.style.display = "none";
        },600)
        

    } else if(cl.contains("fade-out-bottom")){
        cl.remove("fade-out-bottom");
        cl.add("fade-in-bottom");
        footer.style.display = "flex";
    }
});