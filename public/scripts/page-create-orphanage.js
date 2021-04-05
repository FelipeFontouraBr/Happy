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

    document.querySelector('[name=lat]').value = lat; //pegando toda tag que tem name=lat //quando adicionar um ., quer dizer que estamos adicionando alguma propriedade
    document.querySelector('[name=lng]').value = lng;

    // remover icon 
    marker && map.removeLayer(marker) //remover caso o marker existir

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
}) 

// adicionar o campo de fotos
function addPhotoField() {

    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) // Para achar a posição correta do array // -1 para poder começar no zero

    // verificar se o campo está vazio, se sim, não adicionaro ao container de fotos
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

// Excluir a opção a mais de add fotos
// Permitir que o botão exclua só apartir da segunda opção
function deleteField(event) {
    const span = event.currentTarget
    
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = "" //peguei o campo pai, e limpei o campo filho (span, que está na posição zero)
        return 
    }

    // deletar o campo
    span.parentNode.remove()
}

// selecionar do sim e nao
function toggleSelect(event) {

    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    // colocar a class .active no botao clicado
    const button1 = event.currentTarget //botao que está clicado
    button1.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    // verificar sim ou não
    input.value = button1.dataset.value

}
