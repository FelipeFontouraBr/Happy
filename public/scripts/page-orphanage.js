const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//Create map
const map = L.map('mapid', options).setView([38.8795955,-6.9802756], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create and add marker
L
.marker([38.8795955,-6.9802756], { icon: icon })
.addTo(map)

/* image gallery */
function selectImage(event) {
    const button1 = event.currentTarget

    // remover todas as classes .active
    // lógica: o programa irá percorrer um botão de cada vez e remover a classe active
    const buttons = document.querySelectorAll(".images button") //pesquise por todos seletores que vamos passar por argumento
    buttons.forEach(removeActiveClass) //funcionalidades do NodeList //Para cada botão, irá fazer essa funcionalidade

    function removeActiveClass(button) {
        button.classList.remove("active") //Na lista de classe, remove a classe active
    }

    // selecionar a imagem clicada

    // atualizar o container de image 

    // tudo ok, adicionar de volta a classe .active para este botão que foi clicado
    button1.classList.add('active') // Quando clico, deixo a classe ativa
}
