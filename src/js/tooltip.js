document.addEventListener("DOMContentLoaded", function() {
    
    let tooltips = document.getElementsByClassName("tooltip");
    let newSpan = document.createElement("span");
  
    for (let i = 0; i < tooltips.length; i++) {
      tooltips[i].addEventListener("mouseover", showTip);
      tooltips[i].addEventListener("mouseout", hideTip);
    }
  
    function showTip() {
      newSpan.classList.add("tooltipText");
      newSpan.innerText = this.dataset.text;
      this.appendChild(newSpan);
    };
  
    function hideTip() {
        this.removeChild(newSpan);
    };
  
  });