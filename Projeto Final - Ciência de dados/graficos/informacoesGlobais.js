const url = 'https://raw.githubusercontent.com/Thooliveira/Projeto-analise-de-dados/refs/heads/main/Dados%20de%20Transporte'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que a população mundial é de aproximadamente <span>${pessoasNoMundo} bilhões</span> de pessoas? Dentre elas, cerca de <span>${pessoasConectadas} bilhões</span> utilizam meios de transporte, seja público ou particular. Essas pessoas passam, em média, <span>${horas} horas</span> e <span>${minutos} minutos</span> se deslocando diariamente. Isso representa uma significativa contribuição para a economia global, com aproximadamente <span>${porcentagemConectada}%</span> dos usuários em movimento, impulsionando o comércio e a interação social ao redor do mundo.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}


vizualizarInformacoesGlobais()