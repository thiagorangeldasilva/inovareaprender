const time = 3000
let indiceImg = 0, imagens =  Array.from(document.querySelectorAll('#slider img')), seletorSlider = document.getElementById('selecionar'), selecionar = Array.from(document.querySelectorAll('#selecionar li')), passar = true

seletorSlider.addEventListener('click', selecionarImage)

function nextImage(){
    imagens[indiceImg].classList.remove('select')
    selecionar[indiceImg].classList.remove('selecSlider')
    indiceImg++
    if(indiceImg > imagens.length - 1){
        indiceImg = 0
    }
    imagens[indiceImg].classList.add('select')
    selecionar[indiceImg].classList.add('selecSlider')
}

function selecionarImage(elemento){
    let indice = 0
    if(elemento.target.id === 'slider1'){
        indice = 0 
        if(indiceImg !== indice){
            passar = false
            imagens[indiceImg].classList.remove('select')
            selecionar[indiceImg].classList.remove('selecSlider')
            indiceImg = indice
            imagens[indiceImg].classList.add('select')
            selecionar[indiceImg].classList.add('selecSlider')
            setTimeout(() => {
                passar = true
            }, time)
        }
    }else if(elemento.target.id === 'slider2'){
        indice = 1 
        if(indiceImg !== indice){
            passar = false
            imagens[indiceImg].classList.remove('select')
            selecionar[indiceImg].classList.remove('selecSlider')
            indiceImg = indice
            imagens[indiceImg].classList.add('select')
            selecionar[indiceImg].classList.add('selecSlider')
            setTimeout(() => {
                passar = true
            }, time)
        }
    }else if(elemento.target.id === 'slider3'){
        indice = 2 
        if(indiceImg !== indice){
            passar = false
            imagens[indiceImg].classList.remove('select')
            selecionar[indiceImg].classList.remove('selecSlider')
            indiceImg = indice
            imagens[indiceImg].classList.add('select')
            selecionar[indiceImg].classList.add('selecSlider')
            setTimeout(() => {
                passar = true
            }, time)
        }
    }
}

function tamanhoSlider(largura){
    if(largura < 400){
        document.getElementById("slider").style.height = '150px'
    }else if(largura < 500){
        document.getElementById("slider").style.height = '190px'
    }else if(largura < 600){
        document.getElementById("slider").style.height = '235px'
    }else if(largura < 700){
        document.getElementById("slider").style.height = '280px'
    }else if(largura < 800){
        document.getElementById("slider").style.height = '330px'
    }else if(largura < 900){
        document.getElementById("slider").style.height = '370px'
    }else if(largura >= 900){
        document.getElementById("slider").style.height = '400px'
    }
}

function start(){
    setInterval(() => {
        tamanhoSlider(window.innerWidth)
    })
    setInterval(() => {
        if(passar){
            nextImage()
        }
    }, time)
}

window.addEventListener('load', start)

