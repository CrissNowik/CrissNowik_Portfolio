  export function experience_clock(countFrom, id) {
            setInterval(function () {
                let startDate = new Date(countFrom).getTime();
                let now = new Date();
                let timeDifference = (now - startDate);
                
                let secondsInADay = 60 * 60 * 1000 * 24;
                let secondsInAHour = 60 * 60 * 1000;
                
                let days = Math.floor(timeDifference / (secondsInADay) * 1);
                let years = Math.floor(days / 365);
                    if (years >= 1){ 
                        days = days - (years * 365) 
                    }
                let hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
            
                let idEl = document.getElementById(id);
                idEl.getElementsByClassName("years")[0].innerHTML = years;
                idEl.getElementsByClassName("days")[0].innerHTML = days;
                idEl.getElementsByClassName("hours")[0].innerHTML = hours;
        }, 1000);
  }