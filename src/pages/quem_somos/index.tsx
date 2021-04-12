import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import styled from "styled-components";

const Teste = styled.p`
    p {
        text-indent: 1.5em;
        margin-top: 0
    }
`;

export default function QuemSomos() {
    return (
        <Layout>
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-flow-col -mt-2">
                <div className="container my-6 mx-auto px-1 md:px-3 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <div className="ml-3 md:ml-0">
                        <h1 className="text-center my-4 text-4xl md:text-6xl">UM POUCO SOBRE NÓS</h1>
                        <Teste className="my-4 text-justify text-xl px-4">
                            <p>
                                Em meados de agosto de 2020, os pilotos que hoje compõem a equipe Mercedes foram convidados a participar de uma festa realizada no
                                Kartódromo Aldeia da Serra. Acompanhados por um dos pilotos que hoje faz parte da equipe Red Bull,
                                rapidamente a adrenalina que cerca esse esporte tomou conta dos pilotos e contagiou o restante do grupo.
                            </p><br />
                            <p>
                                Deste momento em diante, nos reunimos diversas vezes nos principais kartódromos da grande São Paulo e nos principais kartódromos dos arredores
                                da cidade. Perto do fim de novembro de 2020, a ideia de um campeonato entre amigos (com certeza não imaginávamos que seria algo tão
                                grandioso como é agora) começou a tomar forma.
                            </p><br />
                            <p>
                                Inicialmente, formado pelas equipes Mercedes, Red Bull, Ferrari e Williams, o campeonato foi oficialmente “aberto”. Não demorou muito até que
                                outros amigos se interessassem pelo campeonato. De imediato, juntou-se a nós a equipe Renault! Daí em diante, apenas cresceu o nosso grid e
                                nosso nível de competição... com a entrada das equipes McLaren, Aston Martin e Haas acontecendo praticamente ao mesmo tempo e logo depois a
                                equipe Alfa Romeo também montando nossa linha de largada, começamos a montar a estrutura do nosso campeonato.
                            </p><br />
                            <p>
                                Com nossa primeira prova marcada para fevereiro de 2021, nos preparamos bastante nos meses anteriores, como uma pré-temporada, onde tivemos
                                revelações apresentadas, rivalidades criadas e lendas que caíram... já temos nossos favoritos a campeões e (por que não?) os favoritos a últimos!
                            </p><br />
                            <p>
                                Como uma estrutura precisa de alicerces para se manter em pé, nosso campeonato também conta com uma diretoria que gerencia e toma as decisões para
                                que o campeonato aconteça da forma mais competitiva e prazerosa para todos os pilotos. O conselho da diretoria (apelidado de FIA rsrs) é composto por:
                                Felipe (Williams); Klaus (Ferrari); Bruno (McLaren); Rodrigo (Renault) e Alexandre (Haas).
                            </p><br />
                            <p>
                                E por fim, mas não menos importante, temos a nossa divisão de publicidade, marketing e propaganda. Está divisão que por ora, é gerenciada única e
                                exclusivamente por “Davi (Mercedes)”, é responsável por trazer todo conteúdo em vídeo e gerenciar as contas do YouTube e Instagram do PILOTOS DA VILA. Como
                                apresentadoras estão: Lais Poquiviqui e Nathalyn Ferraz, que fazem a cobertura do que acontece no campeonato.
                            </p><br />
                            <p>
                                Esse foi um breve resumo do que cerca o nosso campeonato e espero que você, que ainda não nos conhece, tenha se interessado e desejado ficar mais por dentro
                                do nosso campeonato!! Caso você queira participar como piloto, será avisado pelo Instagram (@pilotos_da_vila) quando as inscrições abrirem (lembrando que
                                nosso campeonato é formado por duplas, se você não tiver parceiro, poderá se inscrever e esperar até que tenha uma dupla).
                            </p><br />
                            <p>
                                Se você não nos conhecia, muito obrigado por chegar até aqui! Seja muito bem-vindo! Se você já nos conhece, seja igualmente bem recebido e não esqueça de
                                nos seguir nas redes sociais! Obrigado!!!
                            </p><br />
                            <img src="https://i.imgur.com/xL8vBOZ.jpg"></img>
                        </Teste>
                    </div>
                </div>
            </div>
            <div>
                <h3>
                    <Link href={`/`}>
                        <button><a>Home</a></button>
                    </Link>
                    <Link href={`/noticias`}>
                        <button><a>Todas as notícias</a></button>
                    </Link>
                </h3>
            </div>
        </Layout >
    )
}