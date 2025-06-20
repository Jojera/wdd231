document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector('#gallery');

    // Fetch attractions data
    fetch('data/areas.json')
        .then(response => response.json())
        .then(data => {
            data.areas.forEach(area => {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridItem.innerHTML = `
                    <figure>
                        <img loading="lazy" src="${area.image}" alt="${area.name}">
                        <figcaption>
                            <h2>${area.name}</h2>
                            <address>${area.address}</address>
                            <p>${area.description}</p>
                            <button>Learn More</button>
                        </figcaption>
                    </figure>
                `;
                gridContainer.appendChild(gridItem);
            });
        })
        .catch(error => console.error("Error fetching attractions:", error));

    // Handle last visit message
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();

    if (!lastVisit) {
        localStorage.setItem('lastVisit', currentTime);
        alert('Welcome! Let us know if you have any questions.');
    } else {
        const diffTime = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));
        if (diffTime < 1) {
            alert('Back so soon! Awesome!');
        } else {
            alert(`You last visited ${diffTime} day${diffTime === 1 ? '' : 's'} ago.`);
        }
        localStorage.setItem('lastVisit', currentTime);
    }
});