import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import Races from '../components/Races';
import { format } from 'date-fns';

const Noticia = ({ reverse, maxNews }) => {
    return (
        <Layout>
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-cols-2 grid-flow-col">
                <div className="container my-6 mx-auto md:px-12 border-red-500 border-t-8 border-r-8 rounded-r-3xl"> {/*notícia principal*/}
                    <div className="flex flex-wrap -mx-1 lg:-mx-10">
                        <div key={reverse[0]._id} className="my-1 px-1 w-full lg:my-4 lg:px-4">
                            <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg">
                                <a className="no-underline hover:text-red-500 text-black" href="#">
                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="classA text-2xl">
                                            {reverse[0].title}
                                        </h1>
                                    </header>
                                    <img key={reverse._id} className="flex flex-none" src={reverse[0].newsUrl} />
                                </a>
                                <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                    {reverse[0].abstract}
                                </h3>
                                <footer className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <Link href={`/pilotos/${reverse[0].author._id}`}>
                                        <a className="classA flex items-center no-underline hover:text-red-500 hover:underline">
                                            <img key={reverse[0].author._id} alt="Placeholder" className="block mr-2 rounded-full" src={reverse[0].author.avatarUrl} />
                                            <p>Autor: {reverse[0].author.name}<br />
                                            Data: {format(new Date(reverse[0].newsDate), 'dd/MM/yyyy')}</p>
                                        </a>
                                    </Link>
                                </footer>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="container my-6 mx-auto px-4 md:px-12"> {/*demais notícias*/}
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {maxNews.map(news => (
                            <div key={news._id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-red-500 border-b-2 border-l-2 rounded-l-3xl px-2">
                                    <a className="no-underline hover:text-red-500 text-black" href="#">
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="classA text-2xl">
                                                {news.title}
                                            </h1>
                                        </header>
                                        <img key={news._id} className="flex flex-none" src={news.newsUrl} />
                                    </a>
                                    <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                        {news.abstract}
                                    </h3>
                                    <footer className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <Link href={`/pilotos/${news.author._id}`}>
                                            <a className="classA flex items-center no-underline hover:text-red-500 hover:underline">
                                                <img key={news.author._id} alt="Placeholder" className="block mr-2 rounded-full" src={news.author.avatarUrl} />
                                                <p>Autor: {news.author.name}<br />
                                                    Data: {format(new Date(news.newsDate), 'dd/MM/yyyy')}
                                                </p>
                                            </a>
                                        </Link>
                                    </footer>
                                </article>
                            </div>
                        ))}
                        <button className="flex items-center font-bold text-white bg-red-500 hover:bg-black py-1 px-3 focus:outline-none 
                        rounded text-xl mt-4 md:mt-0 ">VER TODAS
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Races></Races>
        </Layout >
    )
};
Noticia.getInitialProps = async () => {
    const { data: noticias } = await axios.get('https://portalnoticia-backend.herokuapp.com/news');
    const reverse = noticias.reverse();
    const reverseSlice = reverse.slice(1);
    const maxNews = reverseSlice.slice(0, 4);

    return {
        reverse,
        maxNews
    }
}
export default Noticia;