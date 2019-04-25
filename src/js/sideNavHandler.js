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
    function isVisible(array) {
        const visibleContainerID = [];        
        for (let i = 0; i < array.length; i++) {
           if (array[i].style.display === "block") {  
            visibleContainerID.push(array[i].id);
           }
        }
        return visibleContainerID;
    }

    const containersIDs = hasID(containers);

    menuItemsArr.forEach((item) => {
        item.addEventListener("click", (e) => {
        e.preventDefault();
        let toShow;
           switch (item.id) {
                case "goToHome":
                    toShow = containersIDs[0]; 
                    break;
                case "goToTester": 
                    toShow = containersIDs[1];
                    break;
                case "goToFrontend":
                    toShow = containersIDs[2];
                    break;
                case "goToAbout":
                    toShow = containersIDs[3];
                    break;
                case "goToContact":
                    toShow = containersIDs[4];
                    break;
                default: 
                    console.warn();
                    ("Error! No suitable sidenav button");
                   break;
           }           
        showAndHide(toShow, isVisible(containers));
        });
    });

    
}

function showAndHide(toShow, toHide) {
    const show = document.getElementById(toShow);
	                                                console.log("TCL: showAndHide -> show", show)
    const hide = document.getElementById(toHide[0]);
	                                                console.log("TCL: showAndHide -> hide", hide)
    show.style.display = "block";
    hide.style.display = "none";
                                                    console.log("Sukces");
    
}
