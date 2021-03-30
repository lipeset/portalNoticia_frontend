import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';

const Piloto = ({ pilotos }) => {
    return (
        <Layout>
            {/* CABEÇALHO */}
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-flow-col -mt-2">
                <div className="container my-6 mx-auto px-1 md:px-3 border-black border-t-8 border-r-8 rounded-r-3xl">
                    <div className="rounded-lg shadow-lg">
                        <h1 className="flex leading-tight p-2 md:p-4 text-6xl font-bold">
                            PV - PILOTOS DE 2021
                        </h1>
                    </div>
                </div>
            </div>
            {/* PILOTOS */}
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-cols-3 grid-rows-6 grid-flow-col -mt-2 items-center">
                {pilotos.map((pilots) => (
                    <div key={pilots._id} className="my-1 px-1 w-full lg:my-4 lg:px-4 container md:px-12 flex-wrap -mx-1 lg:-mx-4">
                        <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-black border-t-2 border-r-2 rounded-r-3xl px-2">
                            <Link href={`/pilotos/${pilots._id}`}>
                                <a className="no-underline text-black">
                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <div className="grid-rows-2">
                                            <h1 className="text-4xl font-bold">
                                                {pilots.name}
                                            </h1>
                                            <h1 className="text-xl font-bold">
                                                {pilots.team.alias}
                                            </h1>
                                        </div>
                                    </header>
                                    <img key={pilots._id} className="flex flex-none" src={pilots.profileUrl} />
                                </a>
                            </Link>
                            <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                {pilots.abstract}
                            </h3>
                        </article>
                    </div>
                ))}
            </div>
        </Layout >
    )
}
Piloto.getInitialProps = async () => {
    const { data: pilotos } = await axios.get('https://portalnoticia-backend.herokuapp.com/pilots');

    return {
        pilotos
    }
}
export default Piloto;