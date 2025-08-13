document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;

            const navbar = document.querySelector(".navbar");
            const hero = document.querySelector(".hero");
            if (!navbar) return;
            
            if (hero) {
                const heroHeight = hero.offsetHeight;
                window.addEventListener("scroll", function() {
                    if (window.scrollY > heroHeight - 80) {
                        navbar.classList.add("navbar-solida");
                        navbar.classList.remove("navbar-transparente");
                    } else {
                        navbar.classList.add("navbar-transparente");
                        navbar.classList.remove("navbar-solida");
                    }
                });
            } else {
                navbar.classList.add("navbar-solida");
                navbar.classList.remove("navbar-transparente");
            }
        })
        .catch(err => console.error("Error cargando la navbar:", err));

    fetch("footer.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer-container").innerHTML = html;
        })
        .catch(err => console.error("Error cargando el footer:", err));

});
