import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout'

// EQUIPE ALL FINALIZADA

export default function Equipe({ equipes }) {
    return (
        <Layout>
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <h1 className="text-center my-4 text-4xl md:text-6xl">AS EQUIPES DE 2021 - PRIMEIRA TEMPORADA</h1>
                    <p className="text-center text-xl">
                        Aqui você pode conferir as equipes que estão disputando a primeira temporada do Campeonato Pilotos da Vila.<br />
                        Lembrando que esta temporada é composta por apenas <strong>seis</strong> provas!
                    </p>
                    <div className="md:grid grid-cols-3 items-center">
                        {equipes.map((teams) => (
                            <div key={teams._id} className="p-4">
                                <article className="overflow-hidden rounded-lg shadow-lg border-black border-t-2 border-r-2 rounded-r-3xl px-2">
                                    <Link href={`/equipes/${teams._id}`}>
                                        <a className="no-underline hover:underline ">
                                            <h1 className="text-2xl font-bold p-2 md:p-4">
                                                {teams.fullName}
                                            </h1>
                                            <img src={teams.gridUrl} />
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout >
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://portalnoticia-backend.herokuapp.com/teams');
    const data = await response.json();

    return {
        props: {
            equipes: data,
        }
    }
};