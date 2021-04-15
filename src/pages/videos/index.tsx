import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/Layout';

export default function Videos({ videos }) {
    return (
        <Layout>
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-flow-col -mt-2">
                <div className="my-6 mx-auto md:px-3 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <div>
                        <h1 className="text-center my-4 text-4xl md:text-6xl">NOSSOS VÍDEOS</h1>
                        <p className="my-4 text-center text-xl px-4">
                            As melhores onboards e as melhores edições pós corrida ficarão aqui!
                        </p>
                        <p className="my-4 text-center text-xl px-4">
                            Lembrando que para ver todos os vídeos (inclusive os treinamentos e amistosos não oficiais) você precisa se inscrever no nosso canal
                            oficial<br /> <strong>Pilotos da Vila no YouTube (
                            <a href="https://www.youtube.com/channel/UCHzJjA6b8vBPU6zN3USXmJg" className="underline" target="_blank">clicando aqui</a>)</strong>!
                            Os melhores vídeos (e onboards) sempre irão aparecer aqui! Muito obrigado!!
                        </p>
                    </div>
                    <div className="container my-6 md:grid grid-cols-2">
                        {videos.reverse().map((video) => (
                            <div key={video._id} className="px-2 my-2">
                                <article className="rounded-lg shadow-lg border-black border-t-2 border-r-2 rounded-r-3xl px-2 pb-2">
                                    <div className="grid-rows-2">
                                        <h1 className="text-2xl font-bold mt-3">
                                            {video.title}
                                        </h1>
                                        <div className="video-container mt-3">
                                            <iframe className="rounded-3xl shadow-lg" src={video.videoLink}
                                                title="Pilotos da Vila" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                            </iframe>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://portalnoticia-backend.herokuapp.com/videos');
    const data = await response.json();

    return {
        props: {
            videos: data
        }
    }
};