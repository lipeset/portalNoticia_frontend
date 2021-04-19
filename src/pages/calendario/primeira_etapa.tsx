import axios from 'axios';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout'

const Corrida = ({ reorder_piloto, reorder_equipe, primeira_etapa }) => {
    function matchName(id) {
        for (var i = 0; i < 10; i++) {
            if (id == reorder_equipe[i]._id) {
                return reorder_equipe[i].alias
            } else {
                continue
            }
        }
    };
    return (
        <Layout>
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <h1 className="text-center my-4 text-4xl md:text-6xl">{primeira_etapa.granprix}</h1>
                    <p className="text-center text-xl">Aqui você pode conferir o resultado da primeira etapa!</p>
                    {/* TOP 3 */}
                    <h1 className="text-center my-4 text-2xl md:text-4xl">Os três primeiros colocados:</h1>
                    <div className="mx-auto md:grid grid-cols-3 grid-flow-col">
                        <div className="hidden md:block my-2 mx-auto md:px-12 w-11/12">
                            <div className="flex justify-end -mx-1 md:-mx-4 my-1">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                    <img key={reorder_piloto[1]._id} className="flex flex-none rounded-3xl" src={reorder_piloto[1].gridUrl} />
                                    <Link href={`/pilotos/${reorder_piloto[1]._id}`}>
                                        <a className="no-underline hover:underline text-black">
                                            <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                                {reorder_piloto[1].name}<br />
                                                Ficou em segundo e marcou {reorder_piloto[1].firstGpPoints} pontos
                                            </h3>
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                        <div className="my-2 mx-auto md:px-12">
                            <div className="flex justify-center -mx-1 md:-mx-4">
                                <div key={reorder_piloto[0]._id} className="my-1 px-1 w-full">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-green-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img key={reorder_piloto[0]._id} className="flex flex-none rounded-3xl" src={reorder_piloto[0].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[0]._id}`}>
                                            <a className="no-underline hover:underline text-black">
                                                <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                                    {reorder_piloto[0].name}<br />
                                                    Ficou em primeiro e marcou {reorder_piloto[0].firstGpPoints} pontos
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block my-2 mx-auto md:px-12 w-11/12">
                            <div className="flex justify-end -mx-1 md:-mx-4 my-1">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                    <img key={reorder_piloto[2]._id} className="flex flex-none rounded-3xl" src={reorder_piloto[2].gridUrl} />
                                    <Link href={`/pilotos/${reorder_piloto[2]._id}`}>
                                        <a className="no-underline hover:underline text-black">
                                            <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                                {reorder_piloto[2].name}<br />
                                                Ficou em terceiro e marcou {reorder_piloto[2].firstGpPoints} pontos
                                            </h3>
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                    {/* TOP RESTO */}
                    <h1 className="text-center my-4 text-2xl md:text-4xl">O restante do grid ficou assim:</h1>
                    {reorder_piloto.slice(3).map((piloto, index) => (
                        <div key={piloto._id} className="container mx-auto px-4 md:px-12 md:grid grid-flow-col">
                            <div className="container my-2 mx-auto md:px-12 w-11/12 ">
                                <div className="flex justify-center -mx-1 md:-mx-4">
                                    <div className="my-1 px-1 w-full">
                                        <article className="overflow-hidden rounded-lg shadow-lg rounded-l-3xl rounded-r-3xl px-2 
                                        hover:bg-gray-400 -mt-1 md:-mt-4 bg-gray-100">
                                            <Link href={`/pilotos/${piloto._id}`}>
                                                <a className="no-underline text-black">
                                                    <header className="grid grid-cols-3 md:grid-cols-4 leading-tight p-2 md:p-4">
                                                        <h1 className="classA text-1xl font-bold text-center -ml-16 md:-ml-72">
                                                            {index + 4}
                                                        </h1>
                                                        <h1 className="classA text-1xl font-bold -ml-14 md:-ml-64">
                                                            {piloto.name}
                                                        </h1>
                                                        <h1 className="classA text-xs font-bold text-center -ml-64 hidden md:block">
                                                            {matchName(piloto.team)}
                                                        </h1>
                                                        <h1 className="classA text-1xl ml-8 md:ml-52 font-bold justify-end">
                                                            {piloto.firstGpPoints} PTS
                                                        </h1>
                                                    </header>
                                                </a>
                                            </Link>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {reorder_equipe.map((equipe) => (
                <h1 key={equipe._id}>{equipe.alias}</h1>
            ))}
        </Layout>
    )
}
Corrida.getInitialProps = async () => {
    const { data: primeira_etapa } = await axios.get('https://portalnoticia-backend.herokuapp.com/lastrace/607d942c46593f0004e47878');
    const reorder_piloto = primeira_etapa.pilot
    const reorder_equipe = primeira_etapa.team

    function compare(a, b) {
        if (a.firstGpPoints > b.firstGpPoints) {
            return -1;
        }
        if (a.firstGpPoints > b.firstGpPoints) {
            return 1;
        }
        if (a.firstGpPoints > b.firstGpPoints) {
            if (a.firstGpFinish > b.firstGpFinish) {
                return -1;
            }
            if (a.firstGpFinish > b.firstGpFinish) {
                return 1;
            }
        }
    }
    reorder_piloto.sort(compare);
    reorder_equipe.sort(compare);

    return {
        primeira_etapa,
        reorder_piloto,
        reorder_equipe
    }
}
export default Corrida;