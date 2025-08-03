// Initialize city maps
document.addEventListener('DOMContentLoaded', function() {
    // Tarlac City Map
    const tarlacMap = L.map('tarlac-city-map').setView([15.4802, 120.5979], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(tarlacMap);
    
    // Add markers for Tarlac City
    L.marker([15.4802, 120.5979]).addTo(tarlacMap)
        .bindPopup('<b>Aquino Center and Museum</b>')
        .openPopup();
    
    // Capas Map
    const capasMap = L.map('capas-map').setView([15.3376, 120.5896], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(capasMap);
    
    // Add markers for Capas
    L.marker([15.3376, 120.5896]).addTo(capasMap)
        .bindPopup('<b>Capas National Shrine</b>')
        .openPopup();
    
    // Bamban Map
    const bambanMap = L.map('bamban-map').setView([15.2999, 120.5625], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(bambanMap);
    
    // Add markers for Bamban
    L.marker([15.2999, 120.5625]).addTo(bambanMap)
        .bindPopup('<b>Bamban Hills</b>')
        .openPopup();
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all maps
    initTarlacCityMap();
    initCapasMap();
    initBambanMap();
    // Add more initialization functions for other municipalities
});

function initTarlacCityMap() {
    const map = L.map('tarlac-city-map').setView([15.4802, 120.5979], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers
    L.marker([15.4736, 120.5997]).addTo(map)
        .bindPopup("<b>Aquino Center and Museum</b><br>Museum dedicated to Ninoy and Cory Aquino")
        .openPopup();
    
    L.marker([15.4869, 120.5895]).addTo(map)
        .bindPopup("<b>Tarlac Recreational Park</b><br>Public park with sports facilities");
    
    L.marker([15.5092, 120.6347]).addTo(map)
        .bindPopup("<b>Isdaan Floating Restaurant</b><br>Unique dining experience");
}

function initCapasMap() {
    const map = L.map('capas-map').setView([15.3316, 120.5898], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers
    L.marker([15.3379, 120.5418]).addTo(map)
        .bindPopup("<b>Capas National Shrine</b><br>Memorial for WWII Death March victims")
        .openPopup();
    
    L.marker([15.1425, 120.3497]).addTo(map)
        .bindPopup("<b>Mount Pinatubo</b><br>Stratovolcano with stunning crater lake");
    
    L.marker([15.3214, 120.5912]).addTo(map)
        .bindPopup("<b>Ylang-Ylang Center</b><br>Essential oil production facility");
}

function initBambanMap() {
    const map = L.map('bamban-map').setView([15.3711, 120.5346], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers
    L.marker([15.3800, 120.5500]).addTo(map)
        .bindPopup("<b>Bamban Hills</b><br>Scenic hiking trails with WWII tunnels")
        .openPopup();
    
    L.marker([15.3700, 120.5300]).addTo(map)
        .bindPopup("<b>Bamban River</b><br>Perfect for nature walks and picnics");
    
    L.marker([15.3750, 120.5400]).addTo(map)
        .bindPopup("<b>Bamban Museum</b><br>Local history and cultural artifacts");
}

// Add similar functions for other municipalities...

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all maps
    initMap('tarlac-city-map', 15.4802, 120.5979, [
        {coords: [15.4736, 120.5997], title: "Aquino Center and Museum", desc: "Museum dedicated to Ninoy and Cory Aquino"},
        {coords: [15.4869, 120.5895], title: "Tarlac Recreational Park", desc: "Public park with sports facilities"},
        {coords: [15.5092, 120.6347], title: "Isdaan Floating Restaurant", desc: "Unique dining experience"}
    ]);
    
    initMap('capas-map', 15.3316, 120.5898, [
        {coords: [15.3379, 120.5418], title: "Capas National Shrine", desc: "Memorial for WWII Death March victims"},
        {coords: [15.1425, 120.3497], title: "Mount Pinatubo", desc: "Stratovolcano with stunning crater lake"},
        {coords: [15.3214, 120.5912], title: "Ylang-Ylang Center", desc: "Essential oil production facility"}
    ]);
    
    initMap('bamban-map', 15.3711, 120.5346, [
        {coords: [15.3800, 120.5500], title: "Bamban Hills", desc: "Scenic hiking trails with WWII tunnels"},
        {coords: [15.3700, 120.5300], title: "Bamban River", desc: "Perfect for nature walks and picnics"},
        {coords: [15.3750, 120.5400], title: "Bamban Museum", desc: "Local history and cultural artifacts"}
    ]);
    
    initMap('concepcion-map', 15.3255, 120.6572, [
        {coords: [15.3255, 120.6572], title: "Concepcion Public Market", desc: "Famous for local delicacies and crafts"},
        {coords: [15.3240, 120.6550], title: "San Jose Parish Church", desc: "Historic Spanish-era church"},
        {coords: [15.3270, 120.6580], title: "Concepcion Park", desc: "Community park with relaxing ambiance"}
    ]);
    
    // Continue for all other municipalities...
});

function initMap(mapId, lat, lng, markers) {
    const map = L.map(mapId).setView([lat, lng], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    markers.forEach((marker, index) => {
        L.marker(marker.coords).addTo(map)
            .bindPopup(`<b>${marker.title}</b><br>${marker.desc}`)
            .openPopup();
    });
}