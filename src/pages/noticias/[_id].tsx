import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// NOTÍCIA ID FINALIZADA

export default function Noticia({ noticia }) {
    const { isFallback } = useRouter();
    if (isFallback) {
        return <p>Carregando...</p>;
    }
    function videoConstruct(videoUrl) {
        if (videoUrl) {
            return <div className="flex justify-center max-w-full mt-4 pb-4">
                <iframe className="rounded-3xl shadow-lg" width="960" height="540" src={noticia.newsVideoUrl}
                    title="Pilotos da Vila" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        } else {
            return ''
        }
    };
    function carouselConstruct(picCarousel) {
        if (picCarousel) {
            return <Carousel autoPlay infiniteLoop>
                {picCarousel.map((pics) => (
                    <div>
                        <img key={pics} src={pics} />
                    </div>
                ))}
            </Carousel>
        } else {
            return ''
        }
    };

    return (
        <Layout>
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-flow-col -mt-2">
                <div className="container my-6 mx-auto px-1 md:px-3 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <div className="ml-3 md:ml-0">
                        <h1 className="text-center my-4 text-4xl md:text-6xl">{noticia.title}</h1>
                        <h3 className="my-4 text-justify text-xl px-4">{noticia.newsContent}</h3>
                    </div>
                    {videoConstruct(noticia.newsVideoUrl)}
                    {carouselConstruct(noticia.newsPicCarousel)}
                </div>
            </div>
            <div>
                <h3>
                    <Link href={`/`}>
                        <button><a>Home</a></button>
                    </Link>
                    <Link href={`/noticias`}>
                        <button><a>Todas as notícias</a></button>
                    </Link>
                </h3>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => { //READ AND PREPARE ALL PILOTS
    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/news`);
    const data = await response.json();

    const paths = data.map(news => {
        return { params: { _id: news._id } }
    });

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (context) => { //FIND A PILOT BY ID
    const { _id } = context.params;
    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/news/${_id}`);
    const data = await response.json();

    return {
        props: {
            noticia: data,
        },
        revalidate: 100,
    }
}