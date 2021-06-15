import axios from 'axios';
import React from 'react';
import Layout from '../../components/Layout';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Mural({ primeiraProva, segundaProva, terceiraaProva, quartaProva }) {
    return (
        <Layout>
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <h1 className="text-center my-4 text-4xl md:text-6xl">MURAL DE FOTOS</h1>
                    <p className="text-center text-xl">
                        Algumas de nossas melhores fotos para você conferir!
                    </p>
                    <p className="my-4 text-center text-xl px-4">
                        Lembrando que todas as fotos aqui publicadas, foram feitas pelo excelente profissional <strong>João Rosatelli (
                            <a href="https://www.instagram.com/jlrosatelli/" className="underline" target="_blank">@jlrosatelli</a>)</strong>! Sigam-no no Instagram!!
                    </p>
                    <div className="my-4 md:grid grid-cols-2 items-center">
                        <div>
                            <p className="text-center text-3xl">Quarta Etapa - Granja Viana (101) - 06/06/2021</p>
                            <Carousel autoPlay infiniteLoop className="p-1" showThumbs={false}>
                                {quartaProva.muralPics.map((fotos4) => (
                                    <div>
                                        <iframe key={fotos4} src={fotos4} width="700" height="445" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div>
                            <p className="text-center text-3xl">Terceira Etapa - San Marino (T6) - 08/05/2021</p>
                            <Carousel autoPlay infiniteLoop className="p-1" showThumbs={false}>
                                {terceiraaProva.muralPics.map((fotos3) => (
                                    <div>
                                        <iframe key={fotos3} src={fotos3} width="700" height="445" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div>
                            <p className="text-center text-3xl">Segunda Etapa - Aldeia da Serra - 18/04/2021</p>
                            <Carousel autoPlay infiniteLoop className="p-1" showThumbs={false}>
                                {segundaProva.muralPics.map((fotos2) => (
                                    <div>
                                        <iframe key={fotos2} src={fotos2} width="700" height="445" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div>
                            <p className="text-center text-3xl">Primeira Etapa - Aldeia da Serra - 20/02/2021</p>
                            <Carousel autoPlay infiniteLoop className="p-1" showThumbs={false}>
                                {primeiraProva.muralPics.map((fotos1) => (
                                    <div>
                                        <iframe key={fotos1} src={fotos1} width="700" height="445" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
Mural.getInitialProps = async () => {
    const { data: primeiraProva } = await axios.get('https://portalnoticia-backend.herokuapp.com/pics/60c79932a0bd6f0004740ce6');
    const { data: segundaProva } = await axios.get('https://portalnoticia-backend.herokuapp.com/pics/60c8dc64a0bd6f0004740ce7');
    const { data: terceiraaProva } = await axios.get('https://portalnoticia-backend.herokuapp.com/pics/60c8defea0bd6f0004740ce8');
    const { data: quartaProva } = await axios.get('https://portalnoticia-backend.herokuapp.com/pics/60c8dfaaa0bd6f0004740ce9');

    return {
        primeiraProva,
        segundaProva,
        terceiraaProva,
        quartaProva
    }
}