const planets = [
    { name: "Mercury", mass: 0.38, radius: 4879 },
    { name: "Venus", mass: 0.95, radius: 12104 },
    { name: "Earth", mass: 1.00, radius: 12742 },
    { name: "Mars", mass: 0.38, radius: 6794 },
    { name: "Jupiter", mass: 317.8, radius: 142984 },
    { name: "Saturn", mass: 94.5, radius: 116460 },
    { name: "Uranus", mass: 14.5, radius: 51118 },
    { name: "Neptune", mass: 17.2, radius: 49528 }
];

document.querySelectorAll('.planet').forEach(planetElement => {
    planetElement.addEventListener('click', () => {
        const planetName = planetElement.id;
        const planet = planets.find(p => p.name === planetName);
        const seismicData = detectSeismicActivity(planet);
        displaySeismicData(seismicData);
    });
});

function detectSeismicActivity(planet) {
    // Simulate seismic activity detection
    const magnitude = (Math.random() * 10).toFixed(2);
    const depth = (Math.random() * 100).toFixed(2);
    const latitude = ((Math.random() * 180) - 90).toFixed(2);
    const longitude = ((Math.random() * 360) - 180).toFixed(2);
    
    return {
        planet: planet.name,
        mass: planet.mass,
        radius: planet.radius,
        magnitude,
        depth,
        location: `${latitude}° ${longitude}°`
    };
}

function displaySeismicData(data) {
    const planetDataDiv = document.getElementById('planet-data');
    planetDataDiv.innerHTML = `
        <h3>Seismic Activity on ${data.planet}</h3>
        <p><strong>Mass:</strong> ${data.mass} Earth masses</p>
        <p><strong>Radius:</strong> ${data.radius} km</p>
        <p><strong>Magnitude:</strong> ${data.magnitude}</p>
        <p><strong>Depth:</strong> ${data.depth} km</p>
        <p><strong>Location:</strong> ${data.location}</p>
    `;
}
