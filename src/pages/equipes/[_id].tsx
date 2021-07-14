import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// EQUIPE ID FINALIZADA

export default function Equipe({ equipe }) {
    const { isFallback } = useRouter();
    if (isFallback) {
        return <p>Carregando...</p>;
    }

    return (
        <Layout>
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 px-1 md:px-3 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg md:grid grid-cols-2">
                    <div>
                        <h1 className="my-4 text-4xl md:text-6xl text-center">{equipe.fullName}</h1>
                        <img className="rounded-2xl w-12/12" src={equipe.gridUrl} />
                        <p className="text-xl text-center bg-gray-300 rounded-xl">{equipe.biography}</p>
                        <Carousel autoPlay infiniteLoop className="p-1">
                            {equipe.teamPics.map((equipe) => (
                                <div>
                                    <img key={equipe} src={equipe} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="grid grid-flow-row">
                        <div className="justify-between grid grid-cols-2 mt-6">
                            <div>
                                <Link href={`/pilotos/${equipe.pilots[0]._id}`}>
                                    <a>
                                        <img className="rounded-2xl p-1" src={equipe.pilots[0].profileUrl} />
                                        <p className="-mt-2 mb-4 p-1 text-1xl md:text-4xl font-bold">{equipe.pilots[0].name}</p>
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href={`/pilotos/${equipe.pilots[1]._id}`}>
                                    <a>
                                        <img className="rounded-2xl p-1" src={equipe.pilots[1].profileUrl} />
                                        <p className="-mt-2 mb-4 p-1 text-1xl md:text-4xl font-bold">{equipe.pilots[1].name}</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 p-1 text-lg md:text-2xl">
                            <div className="font-bold">
                                <h1>NOME CURTO:</h1>
                                <h1>TÍTULOS:</h1>
                                <h1>MELHOR POSIÇÃO:</h1>
                                <h1>POLE POSITIONS:</h1>
                                <h1>VOLTAS RÁPIDAS:</h1>
                            </div>
                            <div className="flex justify-end">
                                <div className="text-center">
                                    <h1>{equipe.alias}</h1>
                                    <h1>{equipe.champCamp}</h1>
                                    <h1>{equipe.teamHighRaceFinish}</h1>
                                    <h1>{equipe.teamPolePositions}</h1>
                                    <h1>{equipe.teamFastLaps}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 bg-pink-400">
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">MV Aldeia: </p>
                                <p className="text-xl md:text-2xl">{equipe.bestAldeiaLap}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <label className="text-xl md:text-2xl">MV G. Viana: </label>
                                <p className="text-xl md:text-2xl">{equipe.bestKgvLap}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <label className="text-xl md:text-2xl">MV Interlagos: </label>
                                <p className="text-xl md:text-2xl">{equipe.bestInterlagosLap}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <label className="text-xl md:text-2xl">MV S. Marino: </label>
                                <h1 className="text-xl md:text-2xl">{equipe.bestSanMarinoLap}</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 bg-green-300">
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 1ª etapa: </p>
                                <p className="text-xl md:text-2xl">{equipe.firstGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 2ª etapa: </p>
                                <p className="text-xl md:text-2xl">{equipe.secondGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 3ª etapa: </p>
                                <p className="text-xl md:text-2xl">{equipe.thirdGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 4ª etapa: </p>
                                <p className="text-xl md:text-2xl">{equipe.fourthGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 5ª etapa: </p>
                                <p className="text-xl md:text-2xl">{equipe.fifithGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 6ª etapa: </p>
                                <p className="text-xl md:text-2xl">{equipe.sixthGpPoints}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 bg-green-400">

                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">MP: </p>
                                <p className="text-xl md:text-2xl">{equipe.firstGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">MP:</p>
                                <p className="text-xl md:text-2xl">{equipe.secondGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">MP:</p>
                                <p className="text-xl md:text-2xl">{equipe.thirdGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">MP:</p>
                                <p className="text-xl md:text-2xl">{equipe.fourthGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">MP:</p>
                                <p className="text-xl md:text-2xl">{equipe.fifithGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">MP:</p>
                                <p className="text-xl md:text-2xl">{equipe.sixthGpFinish}</p>
                            </div>
                        </div>
                        <div className="p-1 text-lg">
                            <h1>MV = Melhor volta // MP = Melhor posição</h1>
                        </div>
                    </div>
                </div>
            </div >
        </Layout >
    )
}
export const getStaticPaths: GetStaticPaths = async () => { //READ AND PREPARE ALL TEAMS
    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/teams`);
    const data = await response.json();

    const paths = data.map(teams => {
        return { params: { _id: teams._id } }
    });

    return {
        paths,
        fallback: true,
    }
}
export const getStaticProps: GetStaticProps = async (context) => { //FIND A TEAM BY ID
    const { _id } = context.params;

    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/teams/${_id}`);
    const data = await response.json();

    return {
        props: {
            equipe: data,
        },
        revalidate: 100,
    }
}