//animação inicial
function isCentBrowser () {
    if (/86/.test(navigator.userAgent)) {
        console.log('usuário está ultilizando o centbrowser!')
    } else {
        const buttonExit = document.getElementById('buttonExit')
        const tela = document.getElementById('sobreTelaInicial')
        tela.style.display = 'flex'
    }
}

buttonExit.addEventListener('click', () => {
    const tela = document.getElementById('sobreTelaInicial')
    tela.classList.add('opc0')

    setTimeout(() => {
        tela.style.display = 'none'
    }, 300)
})

isCentBrowser()




//menu de "mais sistemas"
let i = 0
function aparecer () {
    if (i === 0) {
        const menuLateral = document.getElementById('menu_Lateral')
	    const acesso = document.getElementById('acesso')
        menuLateral.style.display = 'block'
	    acesso.classList.add('ativo')
        setTimeout(() => {
            menuLateral.style.opacity = '1'
        }, 100)
        i++
    } else {
        const menuLateral = document.getElementById('menu_Lateral')
        menuLateral.style.opacity = '0'
	    acesso.classList.remove('ativo')
        setTimeout(() => {
            menuLateral.style.display = 'none'
        }, 300)
        i = 0
    }
}



const linkPupUpFechar = document.querySelector('.linkPupUp.fechar')
const linkPupUpAcessar = document.querySelector('.linkPupUp.acessar')
function fecharPupPup () {
    const pupup = document.querySelector('#divPupUp')

    pupup.style.opacity = 0
    setTimeout(() => {
        pupup.style.display = 'none'
    }, 300)
}