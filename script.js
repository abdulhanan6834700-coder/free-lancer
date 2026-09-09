document.addEventListener("DOMContentLoaded", () => {

    const navToggle = document.getElementById("navToggle");
    const primaryNav = document.getElementById("primaryNav");

    if (navToggle && primaryNav) {

        navToggle.addEventListener("click", () => {

            primaryNav.classList.toggle("open");

            navToggle.setAttribute(
                "aria-expanded",
                primaryNav.classList.contains("open")
            );

        });

        primaryNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                primaryNav.classList.remove("open");

            });

        });

    }


    const elements = document.querySelectorAll(
        ".service-card, .portfolio-card, .process-item, .service-row, .about-panel, .contact-box, .stat, .testimonial"
    );


    elements.forEach(element => {

        element.classList.add("reveal");

    });


    if ("IntersectionObserver" in window) {

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

    } else {

        elements.forEach(element => {

            element.classList.add("show");

        });

    }


    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document.getElementById("name")?.value.trim();

                const email =
                    document.getElementById("email")?.value.trim();

                const service =
                    document.getElementById("service")?.value || "";

                const message =
                    document.getElementById("message")?.value.trim();


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
                        `Name: ${name}
Email: ${email}
Service: ${service}

Project Details:
${message}`
                    );


                window.location.href =
                    "mailto:abdulhanan6834700@gmail.com?subject="
                    + subject
                    + "&body="
                    + body;

            }
        );

    }


    document
        .querySelectorAll(".current-year")
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });

});
