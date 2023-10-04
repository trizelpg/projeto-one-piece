const botoes = document.querySelectorAll('.botao')
console.log(botoes)

const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice)=> {
    botao.addEventListener ('click', () => {

        const botaoSelecionado = document.querySelector('.botao.selecionado');
        botaoSelecionado.classList.remove('selecionado')


        botao.classList.add('selecionado')

        console.log(indice)
        console.log(personagens[indice])

        const personagemSelecionado = document.querySelector('.personagem.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagens[indice].classList.add('selecionado')
    })
})