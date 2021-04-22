import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

const Classificacao = ({ pilotos, equipe }) => {
    function matchName(id) {
        for (var i = 0; i < 10; i++) {
            if (id == equipe[i]._id) {
                return equipe[i].alias
            } else {
                continue
            }
        }
    };
    return (
        <Layout>
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <h1 className="text-center my-4 text-4xl md:text-6xl">CLASSIFICAÇÃO GERAL DO CAMPEONATO</h1>
                    <p className="text-center text-xl">Confira aqui a tabela completa de classificação!</p>
                    <div className="md:grid grid-cols-3 items-center">
                        {pilotos.slice(0, 3).map((pilots, index) => (
                            <div key={pilots._id} className="px-4 md:px-12">
                                <div className="my-1 md:my-2">
                                    <article className="rounded-lg shadow-lg border-black border-t-2 border-r-2 rounded-r-3xl px-2">
                                        <header className="p-2 md:p-4">
                                            <div className="grid grid-rows-2">
                                                <Link href={`/pilotos/${pilots.pilot._id}`}>
                                                    <a className="underline text-black">
                                                        <h1 className="text-xl font-bold">
                                                            {pilots.pilot.name}
                                                        </h1>
                                                    </a>
                                                </Link>
                                                <Link href={`/equipes/${pilots.pilot.team}`}>
                                                    <a className="underline text-black">
                                                        <h1 className="text-xl">
                                                            {matchName(pilots.pilot.team)}
                                                        </h1>
                                                    </a>
                                                </Link>
                                                <h1 className="text-3xl font-bold">{index + 1}º com {pilots.punctuation} pts</h1>
                                            </div>
                                        </header>
                                        <img className="flex flex-auto rounded-3xl" src={pilots.pilot.gridUrl} />
                                    </article>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-center text-4xl my-4">O RESTANTE DO GRID</h1>
                    <div className="md:grid grid-cols-4 items-center">
                        {pilotos.slice(3).map((pilots, index) => (
                            <div key={pilots._id} className="px-4 md:px-12">
                                <div className="my-1 md:my-2">
                                    <article className="rounded-lg shadow-lg border-black border-t-2 border-r-2 rounded-r-3xl px-2">
                                        <header className="p-2 md:p-4">
                                            <div className="grid grid-rows-2">
                                                <Link href={`/pilotos/${pilots.pilot._id}`}>
                                                    <a className="underline text-black">
                                                        <h1 className="text-xl font-bold">
                                                            {pilots.pilot.name}
                                                        </h1>
                                                    </a>
                                                </Link>
                                                <Link href={`/equipes/${pilots.pilot.team}`}>
                                                    <a className="underline text-black">
                                                        <h1 className="text-xl">
                                                            {matchName(pilots.pilot.team)}
                                                        </h1>
                                                    </a>
                                                </Link>
                                                <h1 className="text-3xl font-bold">{index + 4}º com {pilots.punctuation} pts</h1>
                                            </div>
                                        </header>
                                        <img className="flex flex-auto rounded-3xl" src={pilots.pilot.profileUrl} />
                                    </article>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
Classificacao.getInitialProps = async () => {
    const { data: pilotos } = await axios.get('https://portalnoticia-backend.herokuapp.com/pilotclassification');
    const { data: equipe } = await axios.get('https://portalnoticia-backend.herokuapp.com/teams');

    function compare(a, b) {
        if (a.punctuation > b.punctuation) {
            return -1;
        }
        if (a.punctuation > b.punctuation) {
            return 1;
        }
        return 0;
    }
    pilotos.sort(compare);

    return {
        pilotos,
        equipe
    }
}
export default Classificacao;