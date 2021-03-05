import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

export default function Equipe({ equipe }) {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <h1>Nome: {equipe.fullName}</h1>
            <p>Títulos: {equipe.champCamp}</p>
            <p>Maior colocação numa corrida: {equipe.teamHighRaceFinish}</p>
            <p>Pole positions: {equipe.teamPolePositions}</p>
            <p>Voltas rápidas:{equipe.teamFastLaps}</p>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => { //READ AND PREPARE ALL TEAMS
    const response = await fetch(`http://localhost:3001/teams`);
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

    const response = await fetch(`http://localhost:3001/teams/${_id}`);
    const data = await response.json();

    return {
        props: {
            equipe: data,
        },
        revalidate: 10,
    }
}