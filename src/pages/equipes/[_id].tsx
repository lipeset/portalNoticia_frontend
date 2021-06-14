import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
                                <h1>PONTOS 1º GP:</h1>
                                <h1>MP 1º GP:</h1>
                                <h1>PONTOS 2º GP:</h1>
                                <h1>MP 2º GP:</h1>
                                <h1>PONTOS 3º GP:</h1>
                                <h1>MP 3º GP:</h1>
                                <h1>PONTOS 4º GP:</h1>
                                <h1>MP 4º GP:</h1>
                                {/* <h1>PONTOS 5º GP:</h1>
                                <h1>PONTOS 6º GP:</h1> */}
                                <h1>MELHOR POSIÇÃO:</h1>
                                <h1>POLE POSITIONS:</h1>
                                <h1>VOLTAS RÁPIDAS:</h1>
                                <h1>MV ALDEIA:</h1>
                                <h1>MV SAN MARINO:</h1>
                                <h1>MV GRANJA VIANA:</h1>
                            </div>
                            <div className="flex justify-end">
                                <div className="text-center">
                                    <h1>{equipe.alias}</h1>
                                    <h1>{equipe.champCamp}</h1>
                                    <h1>{equipe.firstGpPoints}</h1>
                                    <h1>{equipe.firstGpFinish}</h1>
                                    <h1>{equipe.secondGpPoints}</h1>
                                    <h1>{equipe.secondGpFinish}</h1>
                                    <h1>{equipe.thirdGpPoints}</h1>
                                    <h1>{equipe.thirdGpFinish}</h1>
                                    <h1>{equipe.fourthGpPoints}</h1>
                                    <h1>{equipe.fourthGpFinish}</h1>
                                    {/* <h1>{equipe.fifithGpPoints}</h1>
                                    <h1>{equipe.sixthGpPoints}</h1> */}
                                    <h1>{equipe.teamHighRaceFinish}</h1>
                                    <h1>{equipe.teamPolePositions}</h1>
                                    <h1>{equipe.teamFastLaps}</h1>
                                    <h1>{equipe.bestAldeiaLap}</h1>
                                    <h1>{equipe.bestSanMarinoLap}</h1>
                                    <h1>{equipe.bestKgvLap}</h1>
                                </div>
                            </div>
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
        revalidate: 1000,
    }
}