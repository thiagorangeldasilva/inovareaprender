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
    }else if(largura < 1400){
        document.getElementById('yt_video').style.width = '840px'
        document.getElementById('yt_video').style.height = '472.5px'
    }else if(largura >= 1400){
        document.getElementById('yt_video').style.width = '896px'
        document.getElementById('yt_video').style.height = '504px'
    }
}

function tamanhoTela(largura){
    if(largura < 700){
        document.getElementById('video_yt').style.width = '90%'
        document.getElementById('title-qs').style.width = '90%'
        document.getElementById('title-sub').style.width = '90%'
        document.getElementById('paragrafo-quem-somos').style.width = '90%'
        document.getElementById('img-valores').style.width = '90%'
        document.getElementById('estacoes-lab').style.width = '90%'
        document.getElementById('projetos-alunos').style.width = '90%'
        document.getElementById('projetos-professores').style.width = '90%'
        document.getElementById('projetos-universitario').style.width = '90%'
        document.getElementById('projetos-torneio').style.width = '90%'
        document.getElementById('projetos-oficina').style.width = '90%'
    }else if(largura >= 700){
        document.getElementById('video_yt').style.width = '80%'
        document.getElementById('title-qs').style.width = '80%'
        document.getElementById('title-sub').style.width = '80%'
        document.getElementById('paragrafo-quem-somos').style.width = '80%'
        document.getElementById('img-valores').style.width = '80%'
        document.getElementById('estacoes-lab').style.width = '80%'
        document.getElementById('projetos-alunos').style.width = '80%'
        document.getElementById('projetos-professores').style.width = '80%'
        document.getElementById('projetos-universitario').style.width = '80%'
        document.getElementById('projetos-torneio').style.width = '80%'
        document.getElementById('projetos-oficina').style.width = '80%'
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

function tamanhoEstacaoLab(largura){
    if(largura > 1000){
        document.getElementById('estacoes').style.width = '49.5%' 
        document.getElementById('estacoes').style.marginBottom = '0'
        document.getElementById('estacoes').style.margin = '0 auto 0 0'
        document.getElementById('lab-inovar').style.width = '49.5%'
        document.getElementById('lab-inovar').style.margin = '0 0 0 auto'
    }else if(largura <= 1000){
        document.getElementById('estacoes').style.width = '100%'
        document.getElementById('estacoes').style.marginBottom = '10px'
        document.getElementById('estacoes').style.marginRight = '0'   
        document.getElementById('lab-inovar').style.width = '100%'
        document.getElementById('lab-inovar').style.marginLeft = '0' 
    }
}

function start(){
    setInterval(() => {
        tamanhoTela(window.innerWidth)
        tamanhoVideo(window.innerWidth)
        tamanhoEngrenagem(window.innerWidth)
        espacoEngrenagem(window.innerWidth)
        tamanhoEstacaoLab(window.innerWidth)
    }, 5)
}

window.addEventListener('load', start)