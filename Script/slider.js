const time = 4000
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
    let tamSlider = document.getElementById('selecionar').children
    let eID = elemento.target.id
    
    for(let i = 0, tam = tamSlider.length; i < tam; i++){
        if(eID === `slider${i+1}`){
            if(indiceImg !== i){
                passar = false
                imagens[indiceImg].classList.remove('select')
                selecionar[indiceImg].classList.remove('selecSlider')
                indiceImg = i
                imagens[indiceImg].classList.add('select')
                selecionar[indiceImg].classList.add('selecSlider')
                setTimeout(() => {
                    passar = true
                }, time) 
            }
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
    }, 5)
    setInterval(() => {
        if(passar){
            nextImage()
        }
    }, time)
}

window.addEventListener('load', start)