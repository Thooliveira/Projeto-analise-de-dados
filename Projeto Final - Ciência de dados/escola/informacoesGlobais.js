const url = 'https://raw.githubusercontent.com/Thooliveira/Projeto-analise-de-dados/refs/heads/main/Dados%20do%20Col%C3%A9gio'

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
    paragrafo.innerHTML = `Atualmente, contamos com um total de <span> 1.052 </span> alunos em nosso colégio, que fazem parte de uma comunidade escolar diversa e dinâmica. Cada um desses estudantes contribui para um ambiente de aprendizado enriquecedor, onde a troca de experiências e o crescimento mútuo são priorizados. Nosso compromisso é oferecer uma educação de qualidade que prepare nossos alunos para os desafios do futuro, promovendo o desenvolvimento acadêmico, social e pessoal de todos.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais() 