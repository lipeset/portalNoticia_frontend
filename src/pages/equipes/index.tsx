import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout'

export default function Equipe({ equipes }) {
    return (
        <Layout>
            {/* CABEÇALHO */}
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-flow-col -mt-2">
                <div className="container my-6 mx-auto px-1 md:px-3 border-black border-t-8 border-r-8 rounded-r-3xl">
                    <div className="rounded-lg shadow-lg">
                        <h1 className="flex leading-tight p-2 md:p-4 text-5xl md:text-6xl font-bold">
                            PV - EQUIPES DE 2021
                        </h1>
                    </div>
                </div>
            </div>
            {/* EQUIPES */}
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-cols-2 -mt-2 items-center">
                {equipes.slice(0, 9).map((teams) => (
                    <div key={teams._id} className="my-1 px-1 w-full lg:my-4 lg:px-4 container md:px-12 flex-wrap -mx-1 lg:-mx-4">
                        <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                            border-black border-t-2 border-r-2 rounded-r-3xl px-2">
                            <Link href={`/equipes/${teams._id}`}>
                                <a className="no-underline text-black">
                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <div className="grid-rows-2">
                                            <h1 className="text-4xl font-bold">
                                                {teams.fullName}
                                            </h1>
                                        </div>
                                    </header>
                                    <img key={teams._id} className="flex flex-none mb-6" src={teams.gridUrl} />
                                </a>
                            </Link>
                        </article>
                    </div>
                ))}
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