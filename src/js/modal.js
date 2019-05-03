export function modal() {
        const modal = document.getElementById("modal");
        const btn = document.getElementById("fireModal");
        const span = document.getElementsByClassName("modal__close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

