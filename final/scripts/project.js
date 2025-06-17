// Dynamic Hamburger
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

// Essentials container
document.addEventListener("DOMContentLoaded", () => {
    const essentialsContainer = document.querySelector('#gallery');

    // Fetch data from drums.json
    fetch('data/drums.json')
    .then(response => response.json())
    .then(data => {
        data.drums.forEach(drum => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.innerHTML = `
                <figure>
                    <img loading="lazy" src="${drum.image}" alt="${drum.name}">
                    <figcaption>
                        <h3>${drum.name}</h3>
                        <p>${drum.description}</p>
                        <a href="get-started.html"><button>Learn More</button></a>
                    </figcaption>
                </figure>
            `;
            essentialsContainer.appendChild(gridItem);
        });
    })
    .catch(error => console.error('Error fetching content:', error));
});

// Footer
document.querySelector('#current-year').textContent = new Date(). getFullYear();

