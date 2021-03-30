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
                        <img className="rounded-2xl my-4 md:w-11/12" src={piloto.profileUrl} />
                        <h1 className="-mt-5 mb-4 text-5xl md:text-6xl">{piloto.name}</h1>
                    </div>
                    <div className="justify-between md:grid grid-rows-2">
                        <div className="hidden md:flex justify-center">
                            <img className="rounded-2xl my-4 w-3/5" src={piloto.team.gridUrl} />
                        </div>
                        <div className="grid grid-cols-2 text-lg md:text-xl">
                            <div className="font-bold ml-4">
                                <h1>EQUIPE:</h1>
                                <h1>PODIUNS:</h1>
                                <h1>MELHOR CHEGADA:</h1>
                                <h1>MELHOR LARGADA:</h1>
                                <h1>POLE POSITIONS:</h1>
                                <h1>VOLTAS RÁPIDAS:</h1>
                                <h1>PESO:</h1>
                            </div>
                            <div className="flex justify-end mr-4">
                                <div>
                                    <h1>{piloto.team.alias}</h1>
                                    <h1>{piloto.podiuns}</h1>
                                    <h1>{piloto.highRaceFinish}</h1>
                                    <h1>{piloto.highGridPosition}</h1>
                                    <h1>{piloto.polePosition}</h1>
                                    <h1>{piloto.fastLaps}</h1>
                                    <h1>{piloto.weight} KG</h1>
                                </div>
                            </div>
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
        revalidate: 1000,
    }
}