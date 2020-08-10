let largura, img1filhos = document.getElementById('img1').children, img2filhos = document.getElementById('img2').children

function atualiza(){
    //adiciona
    if(largura < 440){ img1filhos[2].classList.add('ocultar'); img2filhos[2].classList.add('ocultar') }
    if(largura < 560){ img1filhos[3].classList.add('ocultar'); img2filhos[3].classList.add('ocultar') }
    if(largura < 715){ img1filhos[4].classList.add('ocultar'); img2filhos[4].classList.add('ocultar') }
    if(largura < 840){ img1filhos[5].classList.add('ocultar'); img2filhos[5].classList.add('ocultar') }
    if(largura < 1000){ img1filhos[6].classList.add('ocultar'); img2filhos[6].classList.add('ocultar') }
    if(largura < 1120){ img1filhos[7].classList.add('ocultar'); img2filhos[7].classList.add('ocultar') }
    if(largura < 1275){ img1filhos[8].classList.add('ocultar'); img2filhos[8].classList.add('ocultar') }
    if(largura < 1400){ img1filhos[9].classList.add('ocultar'); img2filhos[9].classList.add('ocultar') }
    if(largura < 1565){ img1filhos[10].classList.add('ocultar'); img2filhos[10].classList.add('ocultar') }
    if(largura < 1690){ img1filhos[11].classList.add('ocultar'); img2filhos[11].classList.add('ocultar') }
    if(largura < 1840){ img1filhos[12].classList.add('ocultar'); img2filhos[12].classList.add('ocultar') }
    if(largura < 2000){ img1filhos[13].classList.add('ocultar'); img2filhos[13].classList.add('ocultar') }
    //remove
    if(largura > 440){ img1filhos[2].classList.remove('ocultar'); img2filhos[2].classList.remove('ocultar') }
    if(largura > 560){ img1filhos[3].classList.remove('ocultar'); img2filhos[3].classList.remove('ocultar') }
    if(largura > 715){ img1filhos[4].classList.remove('ocultar'); img2filhos[4].classList.remove('ocultar') }
    if(largura > 840){ img1filhos[5].classList.remove('ocultar'); img2filhos[5].classList.remove('ocultar') }
    if(largura > 1000){ img1filhos[6].classList.remove('ocultar'); img2filhos[6].classList.remove('ocultar') }
    if(largura > 1120){ img1filhos[7].classList.remove('ocultar'); img2filhos[7].classList.remove('ocultar') }
    if(largura > 1275){ img1filhos[8].classList.remove('ocultar'); img2filhos[8].classList.remove('ocultar') }
    if(largura > 1400){ img1filhos[9].classList.remove('ocultar'); img2filhos[9].classList.remove('ocultar') }
    if(largura > 1565){ img1filhos[10].classList.remove('ocultar'); img2filhos[10].classList.remove('ocultar') }
    if(largura > 1690){ img1filhos[11].classList.remove('ocultar'); img2filhos[11].classList.remove('ocultar') }
    if(largura > 1840){ img1filhos[12].classList.remove('ocultar'); img2filhos[12].classList.remove('ocultar') }
    if(largura > 2000){ img1filhos[13].classList.remove('ocultar'); img2filhos[13].classList.remove('ocultar') }
}

function roda(){
    setInterval( () => {
        largura = window.innerWidth
        atualiza()
    }, 30)
}

roda()