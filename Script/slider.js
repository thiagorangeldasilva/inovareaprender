const time = 2000
let indiceImg = 0, imagens =  Array.from(document.querySelectorAll('#slider img')), maxImagens = imagens.length

function nextImage(){
    imagens[indiceImg].classList.remove('select')
    indiceImg++
    if(indiceImg > imagens.length - 1){
        indiceImg = 0
    }
    imagens[indiceImg].classList.add('select')
}

function start(){
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener('load', start)