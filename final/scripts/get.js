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

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector("#gallery");

    // Fetch data from drummers.json
    fetch('data/drummers.json')
    .then(response => response.json())
    .then(data => {
        data.drummers.forEach(drummer => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.innerHTML = `
                <figure>
                    <img loading="lazy" src="${drummer.image}" alt="${drummer.name}">
                    <figcaption>
                        <h3>Name: ${drummer.name}</h3>
                        <p>${drummer.description}</p>
                        <strong><p>Speciality: ${drummer.speciality}</p></strong>
                    </figcaption>
                </figure>
            `;
            gridContainer.appendChild(gridItem);
        }); 
    })
    .catch(error => console.error('Error Fetching Data:', error));
});

// Footer
document.querySelector('#current-year').textContent = new Date(). getFullYear();