import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/Thooliveira/Projeto-analise-de-dados/refs/heads/main/Gr%C3%A1fico%20do%20Col%C3%A9gio'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'GRÁFICO DO NOSSO COLÉGIO',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Em resumo, o gráfico revela a distribuição dos alunos por ano escolar em nossa instituição. O <span> 3º ano  </span> concentra a maior parte dos alunos, com <span> 50% </span> , o que destaca a importância dessa série em nossa comunidade escolar. Em seguida, o <span> 2º ano</span> representa <span> 16,1% </span>  dos alunos, seguido pelo <span> 1º ano </span>  e <span> 9º ano </span>, com <span> 12,8% </span> cada. Já o <span> 8º ano </span> conta com <span> 7,4% </span> dos estudantes, enquanto o <span> 7º ano </span> representa <span> 6,6%  </span>. Por fim, o <span> 6º ano </span> tem a menor participação, com <span> 3,2%. </span>
Essas informações são essenciais para planejarmos estratégias pedagógicas mais eficazes e focadas nas necessidades de cada ano escolar, garantindo que todos os alunos recebam o apoio necessário para seu desenvolvimento e sucesso acadêmico.`)
}

redesFavoritasMundo()