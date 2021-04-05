//Create map
const map = L.map('mapid').setView([38.8795955,-6.9802756], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

let marker; // inicia a variavel vazia, porém é adicionado dentro da função click

// create and add markers
map.on('click', (event) => { //esta ouvindo o click e vai passar um event //aqui se ouve a latitude e longitude
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // remover icon 
    marker && map.removeLayer(marker) //remover caso o marker existir

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
}) 