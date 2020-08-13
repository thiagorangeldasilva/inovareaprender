let largura, img1filhos = document.getElementById('img1').children, img2filhos = document.getElementById('img2').children
let valorLargura = [440, 560, 715, 840, 1000, 1120, 1275, 1400, 1565, 1690, 1840, 2000]
let indFilho = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function atualiza(){
    // adicionar
    for(let i = 0, tam = valorLargura.length; i < tam; i++){
        if(largura < valorLargura[i]){
            img1filhos[indFilho[i]].classList.add('ocultar')
            img2filhos[indFilho[i]].classList.add('ocultar')
        }
    }
    // remover
    for(let i = 0, tam = valorLargura.length; i < tam; i++){
        if(largura > valorLargura[i]){
            img1filhos[indFilho[i]].classList.remove('ocultar')
            img2filhos[indFilho[i]].classList.remove('ocultar')
        }
    }
}

function roda(){
    setInterval( () => {
        largura = window.innerWidth
        atualiza()
    }, 30)
}

roda()