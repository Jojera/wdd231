document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector("#hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active")

        if(navLinks.classList.contains("active")) {
            hamburger.innerHTML = `✖`;
        } else {
            hamburger.innerHTML = `☰`;
        }
    });
}); 

// Action on the form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", () => {
        const formData = new FormData(contactForm);
        for (const [key, value] of formData.entries()) {
            localStorage.setItem(key, value);
        }
    });
};

// timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// modal functionality
const infoButtons = document.querySelectorAll(".info-btn");
const closeButtons = document.querySelectorAll(".close-modal");

// Open modal on clicking the open button(Click here)
infoButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) modal.showModal();
    });
});

// CLose Modal on clicking close button(Close)
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".faqs-modal");
        if (modal) modal.close();
    });
});

// Close modals when clicking outside them
document.querySelectorAll(".faqs-modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
        const rect = modal.getBoundingClientRect();
        if (e.clientY < rect.top || e.clientY > rect.bottom || 
            e.clientX < rect.left || e.clientX > rect.right) {
            modal.close();
        }
    });
});

document.querySelector('#current-year').textContent = new Date(). getFullYear();