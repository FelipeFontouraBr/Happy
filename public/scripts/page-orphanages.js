//Create map
const map = L.map('mapid').setView([38.8795955,-6.9802756], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon


//create and add marker


L
.marker([38.8795955,-6.9802756])
.addTo(map)
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup()