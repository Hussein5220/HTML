// ===============================
// MENU HAMBURGER
// ===============================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Fermer le menu lorsqu'on clique sur un lien

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ===============================
// FORMULAIRE
// ===============================

const form = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

const nom = document.getElementById("nom");
const email = document.getElementById("email");
const sujet = document.getElementById("sujet");
const message = document.getElementById("message");

const nomError = document.getElementById("nomError");
const emailError = document.getElementById("emailError");
const sujetError = document.getElementById("sujetError");
const messageError = document.getElementById("messageError");


// ===============================
// VALIDATION
// ===============================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let valid = true;


    // Nom

    if (nom.value.trim() === "") {

        nomError.textContent = "Veuillez entrer votre nom.";

        nom.classList.add("input-error");

        valid = false;

    } else {

        nomError.textContent = "";

        nom.classList.remove("input-error");

    }


    // Email

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        email.value.trim() === "" ||
        !emailRegex.test(email.value.trim())
    ) {

        emailError.textContent =
            "Veuillez entrer une adresse email valide.";

        email.classList.add("input-error");

        valid = false;

    } else {

        emailError.textContent = "";

        email.classList.remove("input-error");

    }


    // Sujet

    if (sujet.value.trim() === "") {

        sujetError.textContent =
            "Veuillez indiquer un sujet.";

        sujet.classList.add("input-error");

        valid = false;

    } else {

        sujetError.textContent = "";

        sujet.classList.remove("input-error");

    }


    // Message

    if (message.value.trim() === "") {

        messageError.textContent =
            "Veuillez écrire votre message.";

        message.classList.add("input-error");

        valid = false;

    } else {

        messageError.textContent = "";

        message.classList.remove("input-error");

    }


    // ===============================
    // SUCCÈS
    // ===============================

    if (valid) {

        successMessage.classList.add("show");

        form.reset();

    } else {

        successMessage.classList.remove("show");

    }

});


// ===============================
// SUPPRIMER LES ERREURS EN ÉCRIVANT
// ===============================

nom.addEventListener("input", () => {

    nomError.textContent = "";
    nom.classList.remove("input-error");

});

email.addEventListener("input", () => {

    emailError.textContent = "";
    email.classList.remove("input-error");

});

sujet.addEventListener("input", () => {

    sujetError.textContent = "";
    sujet.classList.remove("input-error");

});

message.addEventListener("input", () => {

    messageError.textContent = "";
    message.classList.remove("input-error");

});