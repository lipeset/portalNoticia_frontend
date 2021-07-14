import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Piloto({ piloto }) {
    const { isFallback } = useRouter();
    if (isFallback) {
        return <p>Carregando...</p>;
    }
    return (
        <Layout>
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-flow-col -mt-2">
                <div className="container my-6 mx-auto px-1 md:px-3 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg md:grid grid-cols-2">
                    <div className="ml-3 md:ml-0">
                        <h1 className="my-4 text-4xl md:text-6xl">{piloto.name}</h1>
                        <img className="rounded-2xl my-4 md:w-10/12" src={piloto.profileUrl} />
                    </div>
                    <div className="justify-between md:grid grid-rows-flow">
                        <div className="hidden md:flex justify-center">
                            <img className="rounded-2xl my-4" src={piloto.team.gridUrl} />
                        </div>
                        <div className="grid grid-cols-2 text-lg md:text-2xl">
                            <div className="font-bold">
                                <h1>EQUIPE:</h1>
                                <h1>TÍTULOS:</h1>
                                <h1>PODIUNS:</h1>
                                <h1>MELHOR CHEGADA:</h1>
                                <h1>MELHOR LARGADA:</h1>
                                <h1>POLE POSITIONS:</h1>
                                <h1>VOLTAS RÁPIDAS:</h1>
                                <h1>PESO:</h1>
                            </div>
                            <div className="flex justify-end">
                                <div className="text-center">
                                    <h1>{piloto.team.alias}</h1>
                                    <h1>{piloto.champCamp}</h1>
                                    <h1>{piloto.podiuns}</h1>
                                    <h1>{piloto.highRaceFinish}</h1>
                                    <h1>{piloto.highGridPosition}</h1>
                                    <h1>{piloto.polePosition}</h1>
                                    <h1>{piloto.fastLaps}</h1>
                                    <h1>{piloto.weight} KG</h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 bg-pink-400">
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">MV Aldeia: </p>
                                <p className="text-xl md:text-2xl">{piloto.bestAldeiaLap}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <label className="text-xl md:text-2xl">MV G. Viana: </label>
                                <p className="text-xl md:text-2xl">{piloto.bestKgvLap}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <label className="text-xl md:text-2xl">MV Interlagos: </label>
                                <p className="text-xl md:text-2xl">{piloto.bestInterlagosLap}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <label className="text-xl md:text-2xl">MV S. Marino: </label>
                                <h1 className="text-xl md:text-2xl">{piloto.bestSanMarinoLap}</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 bg-green-300">
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 1ª etapa: </p>
                                <p className="text-xl md:text-2xl">{piloto.firstGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 2ª etapa: </p>
                                <p className="text-xl md:text-2xl">{piloto.secondGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 3ª etapa: </p>
                                <p className="text-xl md:text-2xl">{piloto.thirdGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 4ª etapa: </p>
                                <p className="text-xl md:text-2xl">{piloto.fourthGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 5ª etapa: </p>
                                <p className="text-xl md:text-2xl">{piloto.fifithGpPoints}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pontos 6ª etapa: </p>
                                <p className="text-xl md:text-2xl">{piloto.sixthGpPoints}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 bg-green-400">
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pos.: </p>
                                <p className="text-xl md:text-2xl">{piloto.firstGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pos.:</p>
                                <p className="text-xl md:text-2xl">{piloto.secondGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pos.:</p>
                                <p className="text-xl md:text-2xl">{piloto.thirdGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pos.:</p>
                                <p className="text-xl md:text-2xl">{piloto.fourthGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pos.:</p>
                                <p className="text-xl md:text-2xl">{piloto.fifithGpFinish}</p>
                            </div>
                            <div className="border-2 border-black text-center">
                                <p className="text-xl md:text-2xl">Pos.:</p>
                                <p className="text-xl md:text-2xl">{piloto.sixthGpFinish}</p>
                            </div>
                        </div>
                        <div className="p-1 text-lg">
                            <h1>MV = Melhor volta // POS = Posição</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const getStaticPaths: GetStaticPaths = async () => { //READ AND PREPARE ALL PILOTS
    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/pilots`);
    const data = await response.json();

    const paths = data.map(pilots => {
        return { params: { _id: pilots._id } }
    });

    return {
        paths,
        fallback: true,
    }
}
export const getStaticProps: GetStaticProps = async (context) => { //FIND A PILOT BY ID
    const { _id } = context.params;

    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/pilots/${_id}`);
    const data = await response.json();

    return {
        props: {
            piloto: data,
        },
        revalidate: 100,
    }
}