import axios from 'axios';
import React from 'react';
import Layout from '../../components/Layout';

export default function Mural({ picUrl }) {
    console.log(picUrl)
    return (
        <Layout>
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-flow-col -mt-2">
                <div className="container my-6 mx-auto px-1 md:px-3 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <div className="ml-3 md:ml-0">
                        <h1 className="text-center my-4 text-4xl md:text-6xl">MURAL DE FOTOS</h1>
                        <p className="my-4 text-center text-xl px-4">
                            Algumas de nossas melhores fotos para você conferir!
                        </p>
                        <p className="my-4 text-center text-xl px-4">
                            Lembrando que todas as fotos aqui publicadas, foram feitas pelo excelente profissional <strong>João Rosatelli (
                            <a href="https://www.instagram.com/jlrosatelli/" className="underline" target="_blank">@jlrosatelli</a>)</strong>! Sigam ele no Instagram!!
                        </p>
                    </div>
                    <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-cols-4 -mt-2 items-center">
                        {picUrl.reverse().map((pics) => (
                            <div key={pics} className="my-1 px-1 w-full lg:my-4 lg:px-4 container md:px-12 flex-wrap -mx-1 lg:-mx-4">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-black border-t-2 border-r-2 rounded-r-3xl px-2">
                                    <a className="no-underline">
                                        <img key={pics._id} className="flex flex-none" src={pics.muralPics} />
                                    </a>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
Mural.getInitialProps = async () => {
    const { data: picUrl } = await axios.get('https://portalnoticia-backend.herokuapp.com/pics');

    return {
        picUrl
    }
}