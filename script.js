document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const navToggle = document.getElementById("navToggle");
    const primaryNav = document.getElementById("primaryNav");

    if (navToggle && primaryNav) {

        navToggle.addEventListener("click", () => {
            primaryNav.classList.toggle("open");
        });

        const links = primaryNav.querySelectorAll("a");

        links.forEach(link => {

            link.addEventListener("click", () => {
                primaryNav.classList.remove("open");
            });

        });
    }


    /* =========================
       SCROLL REVEAL ANIMATION
    ========================= */

    const elements = document.querySelectorAll(
        ".service-card, .portfolio-card, .process-item, .service-row, .about-panel, .contact-box"
    );

    elements.forEach(element => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elements.forEach(element => {
        observer.observe(element);
    });


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();

                const name =
                    document.getElementById("name")
                    ?.value.trim();

                const email =
                    document.getElementById("email")
                    ?.value.trim();

                const service =
                    document.getElementById("service")
                    ?.value;

                const message =
                    document.getElementById("message")
                    ?.value.trim();


                if (!name || !email || !message) {

                    alert(
                        "Please fill in all required fields."
                    );

                    return;
                }


                const subject =
                    encodeURIComponent(
                        "New Project Enquiry - " + name
                    );


                const body =
                    encodeURIComponent(

                        "Name: " +
                        name +

                        "\nEmail: " +
                        email +

                        "\nService: " +
                        service +

                        "\n\nProject Details:\n" +
                        message

                    );


                window.location.href =
                    "mailto:abdulhanan6834700@gmail.com" +
                    "?subject=" +
                    subject +
                    "&body=" +
                    body;

            }
        );

    }


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });

});
