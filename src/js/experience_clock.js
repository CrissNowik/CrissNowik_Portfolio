const startDate = new Date("Sep 1, 2017 00:00:01").getTime();

export function experience_clock() {
    setInterval(function () {

        let data = new Date();
        let distance = data - startDate;
        
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
            document.getElementById("counter").innerHTML = days + " dni " + hours + " godzin " +
            minutes + " minut";
    }, 1000);
};
