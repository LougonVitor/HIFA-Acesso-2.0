function isCentBrowser () {
    if (/86/.test(navigator.userAgent)) {
        console.log('usuário está ultilizando o centbrowser!')
    } else {
        const buttonExit = document.getElementById('buttonExit')
        const tela = document.getElementById('sobreTelaInicial')
        document.body.style.overflow = 'hidden'
        tela.style.display = 'flex'
    }
}

buttonExit.addEventListener('click', () => {
    const tela = document.getElementById('sobreTelaInicial')
    tela.classList.add('opc0')
    document.body.style.overflow = 'auto'

    setTimeout(() => {
        tela.style.display = 'none'
    }, 300)
})

isCentBrowser()



let contador = 0
const linkMenuEscondido = window.document.getElementById('linkMenuEscondido')
linkMenuEscondido.addEventListener('click', (event) => {
    event.preventDefault();
    const menuEscondido = window.document.getElementById('menuEscondido')
    if (contador == 0) {
        menuEscondido.style.display = 'block'
        contador++
    } else {
        menuEscondido.style.display = 'none'
        contador--
    }
})