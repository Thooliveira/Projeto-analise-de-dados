import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/Thooliveira/Projeto-analise-de-dados/refs/heads/main/Circulo%20Gr%C3%A1fico%20de%20Transportes'
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
            text: 'Transportes mais usados no mundo',
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

    incluirTexto(`Os dados apresentados refletem a porcentagem de diferentes meios de transporte utilizados, destacando a predominância do carro, que corresponde a <span> 27,6% </span> das escolhas. Isso indica uma forte preferência pela mobilidade individual, o que pode ser atribuído à conveniência e flexibilidade que o carro oferece aos usuários.

Em segundo lugar, temos o ônibus, com <span> 17,6%. </span> Este meio de transporte é uma opção popular para quem busca uma alternativa mais econômica e sustentável, principalmente em áreas urbanas, onde o tráfego pode ser intenso.

Os outros meios de transporte, como trem, táxi, avião e navio, apresentam uma porcentagem igual de <span> 13,7%. </span> Isso sugere que, embora menos utilizados que o carro e o ônibus, esses meios têm seu espaço e importância, atendendo a diferentes necessidades e contextos, como viagens longas ou transporte de carga.

Esses dados revelam não apenas as preferências atuais dos usuários, mas também podem indicar tendências em relação à mobilidade urbana e à necessidade de melhorias nos sistemas de transporte público. A promoção de alternativas sustentáveis e a melhoria da infraestrutura podem influenciar a mudança desse cenário, incentivando mais pessoas a optarem por meios de transporte coletivos e menos poluentes.`)
}

redesFavoritasMundo()