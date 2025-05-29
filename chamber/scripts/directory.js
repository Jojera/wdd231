document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        // Toggle Hamburger & X Icon
        if (navLinks.classList.contains("active")) {
            hamburger.innerHTML = "✖"; // Close icon
        } else {
            hamburger.innerHTML = "☰"; // Hamburger icon
        }
    });
});

document.getElementById('grid').addEventListener('click', () => {
    document.querySelector('#members-container').classList.add('grid');
    document.querySelector('#members-container').classList.remove('list');
});

document.getElementById('list').addEventListener('click', () => {
    document.querySelector('#members-container').classList.add('list');
    document.querySelector('#members-container').classList.remove('grid');
});

async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
  }
  
  function displayMembers(members) {
    const container = document.querySelector('#members-container'); // Add this div in your HTML
  
    members.forEach(member => {
      const card = document.createElement('section');
      card.classList.add('member-card');
  
      card.innerHTML = `
        <h2>${member.name}</h2>
        <img src="images/${member.image}" alt="Logo of ${member.name}">
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership Level:</strong> ${member.membership}</p>
        <p>${member.description}</p>
      `;
  
      container.appendChild(card);
    });
  }
  
getMembers();

document.getElementById('currentyear').textContent= new Date().getFullYear();

document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;