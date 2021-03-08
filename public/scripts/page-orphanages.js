//Create map
const map = L.map('mapid').setView([38.8795955,-6.9802756], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
})

//create and add marker


L
.marker([38.8795955,-6.9802756])
.addTo(map)
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup()