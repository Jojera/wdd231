async function getSpotlightMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const members = data.members;
  
    // Filter only gold or silver members
    const spotlightCandidates = members.filter(m => m.membership === 2 || m.membership === 3);
  
    // Shuffle and pick 2–3 randomly
    const shuffled = spotlightCandidates.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
  
    const spotlightContainer = document.querySelector('#spotlights');
    selected.forEach(member => {
      const section = document.createElement('section');
      section.classList.add('spotlight');
  
      section.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="Logo of ${member.name}">
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
      `;
  
      spotlightContainer.appendChild(section);
    });
  }
  
  getSpotlightMembers();