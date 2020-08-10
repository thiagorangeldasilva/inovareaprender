const time = 2000
let indiceImg = 0, imagens =  Array.from(document.querySelectorAll('#slider img')), tamanho

function nextImage(){
    imagens[indiceImg].classList.remove('select')
    indiceImg++
    if(indiceImg > imagens.length - 1){
        indiceImg = 0
    }
    imagens[indiceImg].classList.add('select')
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
        nextImage()
    }, time)
}

window.addEventListener('load', start)