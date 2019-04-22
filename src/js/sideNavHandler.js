export function sideNavHandler(){
   
   const menuItemsArr = Array.from(document.getElementsByClassName("menu__item"));
   const containers = Array.from(document.getElementsByClassName("container")); 
   console.log("TCL: sideNavHandler -> containers", containers)
   
    menuItemsArr.forEach((item) => {
        item.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(item.id);
        
        showAndHide(containers[6], containers[0])
        });
    });

    
}

function showAndHide(toShow, toHide) {
    const show = document.getElementById(toShow);
	console.log("TCL: showAndHide -> show", show)
    const hide = document.getElementById(toHide);
	console.log("TCL: showAndHide -> hide", hide)
    show.style.display = "block";
    hide.style.display = "none";
    console.log("Sukces");
    
}


// 