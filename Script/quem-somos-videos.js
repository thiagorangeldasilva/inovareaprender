function tamanhoVideo(largura){
    if(largura < 420){
        document.getElementById('yt_video').style.width = '252px'
        document.getElementById('yt_video').style.height = '141.75px'
    }else if(largura < 500){
        document.getElementById('yt_video').style.width = '336px'
        document.getElementById('yt_video').style.height = '189px'
    }else if(largura < 600){
        document.getElementById('yt_video').style.width = '392px'
        document.getElementById('yt_video').style.height = '220.5px'
    }else if(largura < 700){
        document.getElementById('yt_video').style.width = '448px'
        document.getElementById('yt_video').style.height = '252px'
    }else if(largura < 900){
        document.getElementById('yt_video').style.width = '504px'
        document.getElementById('yt_video').style.height = '283.5px'
    }else if(largura < 1200){
        document.getElementById('yt_video').style.width = '644px'
        document.getElementById('yt_video').style.height = '362.25px'
    }else if(largura >= 1200){
        document.getElementById('yt_video').style.width = '840px'
        document.getElementById('yt_video').style.height = '472.5px'
    }
}

function tamanhoTela(largura){
    if(largura < 700){
        document.getElementById('video_yt').style.width = '90%'
        document.getElementById('title-quem-somos').style.width = '90%'
        document.getElementById('paragrafo-quem-somos').style.width = '90%'
        document.getElementById('img-valores').style.width = '90%'
    }else if(largura >= 700){
        document.getElementById('video_yt').style.width = '80%'
        document.getElementById('title-quem-somos').style.width = '80%'
        document.getElementById('paragrafo-quem-somos').style.width = '80%'
        document.getElementById('img-valores').style.width = '80%'
    }
}

function tamanhoEngrenagem(largura){
    if(largura >= 860){
        document.getElementById('engrenagem-missao').style.width = '300px' 
        document.getElementById('engrenagem-visao').style.width = '300px' 
        document.getElementById('engrenagem-valores').style.width = '300px' 
    }else if(largura < 860){
        document.getElementById('engrenagem-missao').style.width = '200px' 
        document.getElementById('engrenagem-visao').style.width = '200px' 
        document.getElementById('engrenagem-valores').style.width = '200px'
    }
}

function espacoEngrenagem(largura){
    if(largura <= 500){
        document.getElementById('engrenagem-missao').style.marginBottom = '10px' 
        document.getElementById('engrenagem-visao').style.marginBottom = '10px'
    }
}

function start(){
    setInterval(() => {
        tamanhoTela(window.innerWidth)
        tamanhoVideo(window.innerWidth)
        tamanhoEngrenagem(window.innerWidth)
        espacoEngrenagem(window.innerWidth)
    }, 5)
}

window.addEventListener('load', start)