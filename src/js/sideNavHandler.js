export function sideNavHandler(){
   
   const menuItemsArr = Array.from(document.getElementsByClassName("menu__item"));
   const containers = Array.from(document.getElementsByClassName("container")); 

    function hasID(array) {
        const IDs = [];        
        for (let i = 0; i < array.length; i++) {
           if (array[i].id !== "") {               
               IDs.push(array[i].id);
           }
        }
        return IDs;
    }

    const menuItemsIDs = hasID(menuItemsArr);
    const containersIDs = hasID(containers);
    console.log("TCL: sideNavHandler -> menuItemsIDs", menuItemsIDs)
    console.log("TCL: sideNavHandler -> containersIDs", containersIDs)
    


    menuItemsArr.forEach((item) => {
        item.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(item.id);
        showAndHide(containers[6].id, containers[0].id)
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