// Efek Mengetik Otomatis
const textElement = document.getElementById("text");
const phrases = [ "Jalan.", "Trotoar.", "Jembatan."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 200;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 1000; // Jeda saat teks lengkap
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Menjalankan efek saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    
    // Efek Scroll Navbar (Berubah warna saat di-scroll)
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("nav-active");
        } else {
            nav.classList.remove("nav-active");
        }
    });
});