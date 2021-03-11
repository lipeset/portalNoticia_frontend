import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { format } from 'date-fns';

const Noticia = ({ reverse }) => {
    return (
        <Layout>
            <div className="container my-6 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {reverse.map(news => (
                        <div key={news._id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <a className="no-underline hover:text-red-500 text-black" href="#">
                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="classA text-2xl">
                                            {news.title}
                                        </h1>
                                    </header>
                                    <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                        {news.abstract}
                                    </h3>
                                </a>
                                <footer className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <Link href={`/pilotos/${news.author._id}`}>
                                        <a className="classA flex items-center no-underline hover:text-red-500 hover:underline">
                                            <img key={news.author._id} alt="Placeholder" className="block mr-2 rounded-full" src={news.author.avatarUrl} />
                                            <p>Autor: {news.author.name}<br />
                                            Data: {format(new Date(news.newsDate), 'dd/MM/yyyy')}</p>
                                        </a>
                                    </Link>
                                </footer>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </Layout >
    )
};
Noticia.getInitialProps = async () => {
    const { data: noticias } = await axios.get('https://portalnoticia-backend.herokuapp.com/news');
    const reverse = noticias.reverse();

    return {
        reverse
    }
}
export default Noticia;