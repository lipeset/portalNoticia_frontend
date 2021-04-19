import React from 'react';
import Layout from '../../components/Layout';

export default function Calendario() {
    return (
        <Layout>
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <h1 className="text-center my-4 text-4xl md:text-6xl">CALENDÁRIO DA PRIMEIRA TEMPORADA</h1>
                    <p className="text-center text-xl">
                        Aqui você pode conferir o nosso calendário da primeira temporada. Lembrando que
                        esta temporada é composta por apenas <strong>seis</strong> provas!
                    </p>
                    <div className="my-4 md:grid grid-cols-3 items-center">
                        <a href="/calendario/primeira_etapa">
                            <div className="flex justify-center my-1">
                                <img className="rounded-lg" src="https://i.imgur.com/NnvOIlJ.png" />
                            </div>
                        </a>
                        <a href="/calendario/segunda_etapa">
                            <div className="flex justify-center my-1">
                                <img className="rounded-lg" src="https://i.imgur.com/AWm2noq.png" />
                            </div>
                        </a>
                        <div className="flex justify-center my-1">
                            <img className="rounded-lg" src="https://i.imgur.com/NRcTfQt.png" />
                        </div>
                        <div className="flex justify-center my-1">
                            <img className="rounded-lg" src="https://i.imgur.com/XK4uNTt.png" />
                        </div>
                        <div className="flex justify-center my-1">
                            {/* <img className="flex flex-none rounded-lg" src="https://i.imgur.com/AWm2noq.png" /> */}
                            <p className="text-center text-3xl">SERÁ EM <strong>INTERLAGOS</strong><br />
                            PORÉM A DATA ESTÁ INDEFINIDA</p>
                        </div>
                        <div className="flex justify-center my-1">
                            <img className="rounded-lg mb-4 md:mb-0" src="https://i.imgur.com/TWQEVkz.png" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}