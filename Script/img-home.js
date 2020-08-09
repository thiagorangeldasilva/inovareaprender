let largura = innerWidth, img1filhos = document.getElementById('img1').children, frames = 0, indice

function atualiza(){
    frames++
    if(largura < 400){
        indice = 2
    }else if(largura < 500){
        indice = 3
    }else if(largura < 600){
        indice = 4
    }else if(largura < 900){
        indice = 6
    }else if(largura < 1200){
        indice = 9
    }else if(largura < 1700){
        indice = 12
    }else if(largura < 600){
        indice = 4
    }else if(largura < 2000){
        indice = 13
    }
}
function desenhaADD(elemento){
    for(;elemento < img1filhos.length; elemento++){
        img1filhos[elemento].classList.add('ocultar')
    }
}
function desenhaRemove(elemento){
    for(;elemento > 1; elemento--){
        img1filhos[elemento].classList.remove('ocultar')
    }
}


function roda(){
    atualiza()
    desenhaADD(indice)
    desenhaRemove(indice)
    window.requestAnimationFrame(roda)
}

roda()