import "./main.scss"; // important for build - do not remove
// import { importTest } from "./js/someJSModule"; // import example

const menuIcon = document.getElementById("menu");
const footer = document.getElementById("footer") 
const body = document.getElementById("body");

menuIcon.addEventListener("click", function(){

    if (footer.style.display === "flex") {
        footer.style.display = "none";       
    } else {
        footer.style.display = "flex";        
    }       
    window.scrollTo(0, 1000);
    });