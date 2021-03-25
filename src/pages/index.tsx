import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import Races from '../components/Races';
import { format } from 'date-fns';
import styled from "styled-components";

const DivBox = styled.div`
    width: 50px;
    background-color: powderblue;
`;

const Noticia = ({ reverse, maxNews, limiteClassificacao }) => {
    return (
        <Layout>
            {/* NOTÍCIAS */}
            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-cols-2 grid-flow-col -mt-2">
                {/*NOTÍCIA PRINCIPAL*/}
                <div className="container my-6 mx-auto md:px-12 border-red-500 border-t-8 border-r-8 rounded-r-3xl">
                    <div className="flex flex-wrap -mx-1 lg:-mx-10">
                        <div key={reverse[0]._id} className="my-1 px-1 w-full lg:my-4 lg:px-4">
                            <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg">
                                <Link href={`/noticias/${reverse[0]._id}`}>
                                    <a className="no-underline hover:text-red-500 text-black">
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="classA text-2xl">
                                                {reverse[0].title}
                                            </h1>
                                        </header>
                                        <img key={reverse._id} className="flex flex-none" src={reverse[0].newsUrl} />
                                    </a>
                                </Link>
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
                {/*DEMAIS NOTÍCIAS*/}
                <div className="container my-6 mx-auto px-4 md:px-12">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {/*PENÚLTIMA NOTÍCIA*/}
                        <div key={reverse[1]._id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
                            <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                            border-red-500 border-b-2 border-l-2 rounded-l-3xl px-2">
                                <Link href={`/noticias/${reverse[1]._id}`}>
                                    <a className="no-underline hover:text-red-500 text-black">
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="classA text-2xl">
                                                {reverse[1].title}
                                            </h1>
                                        </header>
                                        <img key={reverse[1]._id} className="flex flex-none" src={reverse[1].newsUrl} />
                                    </a>
                                </Link>
                                <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                    {reverse[1].abstract}
                                </h3>
                                <footer className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <Link href={`/pilotos/${reverse[1].author._id}`}>
                                        <a className="classA flex items-center no-underline hover:text-red-500 hover:underline">
                                            <img key={reverse[1].author._id} alt="Placeholder" className="block mr-2 rounded-full" src={reverse[1].author.avatarUrl} />
                                            <p>Autor: {reverse[1].author.name}<br />
                                                Data: {format(new Date(reverse[1].newsDate), 'dd/MM/yyyy')}
                                            </p>
                                        </a>
                                    </Link>
                                </footer>
                            </article>
                        </div>
                        {/*ANTEPENÚLTIMA NOTÍCIA*/}
                        <div key={reverse[2]._id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
                            <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                            border-red-500 border-b-2 border-l-2 rounded-l-3xl px-2">
                                <Link href={`/noticias/${reverse[2]._id}`}>
                                    <a className="no-underline hover:text-red-500 text-black">
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="classA text-2xl">
                                                {reverse[2].title}
                                            </h1>
                                        </header>
                                        <img key={reverse[2]._id} className="flex flex-none" src={reverse[2].newsUrl} />
                                    </a>
                                </Link>
                                <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                    {reverse[2].abstract}
                                </h3>
                                <footer className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <Link href={`/pilotos/${reverse[2].author._id}`}>
                                        <a className="classA flex items-center no-underline hover:text-red-500 hover:underline">
                                            <img key={reverse[2].author._id} alt="Placeholder" className="block mr-2 rounded-full" src={reverse[2].author.avatarUrl} />
                                            <p>Autor: {reverse[2].author.name}<br />
                                            Data: {format(new Date(reverse[2].newsDate), 'dd/MM/yyyy')}
                                            </p>
                                        </a>
                                    </Link>
                                </footer>
                            </article>
                        </div>
                        {/*OUTRAS DUAS*/}
                        {maxNews.map((news) => (
                            <div key={news._id} className="my-1 hidden md:block px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-red-500 border-b-2 border-l-2 rounded-l-3xl px-2">
                                    <Link href={`/noticias/${news._id}`}>
                                        <a className="no-underline hover:text-red-500 text-black">
                                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                <h1 className="classA text-2xl">
                                                    {news.title}
                                                </h1>
                                            </header>
                                            <img key={news._id} className="flex flex-none" src={news.newsUrl} />
                                        </a>
                                    </Link>
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
                        {/* BOTÃO VER MAIS */}
                        <div className="container mx-auto grid-flow-col max-w-full content-center">
                            <div className="grid grid-flow-col justify-center md:justify-start bg-white">
                                <a href="/noticias">
                                    <button className="flex items-center font-bold text-white bg-red-500 hover:bg-black py-1 px-3 focus:outline-none 
                                        rounded text-xl md:mt-0 ">
                                        VER TODAS
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CALENDÁRIO */}
            <Races />

            {/* GRID DE CLASSIFICAÇÃO - FOTOS */}
            <h3 className="flex justify-center text-5xl mt-2 md:mt-0">CLASSIFICAÇÃO</h3>
            <div className="container mx-auto px-4 md:px-12 md:grid grid-cols-3 grid-flow-col">
                <div className="hidden md:block container my-2 mx-auto md:px-12 w-11/12 -mr-14">
                    <div className="flex justify-end -mx-1 md:-mx-4">
                        <div key={limiteClassificacao[1].pilot._id} className="my-1 px-1 w-full">
                            <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                <img key={limiteClassificacao[1].pilot._id} className="flex flex-none rounded-3xl" src={limiteClassificacao[1].pilot.gridUrl} />
                                <Link href={`/pilotos/${limiteClassificacao[1].pilot._id}`}>
                                    <a className="no-underline hover:underline text-black">
                                        <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                            {limiteClassificacao[1].pilot.name}<br />
                                            Está em segundo com {limiteClassificacao[1].punctuation} pontos
                                        </h3>
                                    </a>
                                </Link>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="container my-2 mx-auto md:px-12">
                    <div className="flex justify-center -mx-1 md:-mx-4">
                        <div key={limiteClassificacao[0].pilot._id} className="my-1 px-1 w-full">
                            <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-green-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                <img key={limiteClassificacao[0].pilot._id} className="flex flex-none rounded-3xl" src={limiteClassificacao[0].pilot.gridUrl} />
                                <Link href={`/pilotos/${limiteClassificacao[0].pilot._id}`}>
                                    <a className="no-underline hover:underline text-black">
                                        <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                            {limiteClassificacao[0].pilot.name}<br />
                                            Está em primeiro com {limiteClassificacao[0].punctuation} pontos
                                        </h3>
                                    </a>
                                </Link>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block container my-2 mx-auto md:px-12 w-11/12 -ml-14">
                    <div className="flex justify-start -mx-1 md:-mx-4">
                        <div key={limiteClassificacao[2].pilot._id} className="my-1 px-1 w-full">
                            <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                <img key={limiteClassificacao[2].pilot._id} className="flex flex-none rounded-3xl" src={limiteClassificacao[2].pilot.gridUrl} />
                                <Link href={`/pilotos/${limiteClassificacao[2].pilot._id}`}>
                                    <a className="no-underline hover:underline text-black">
                                        <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                            {limiteClassificacao[2].pilot.name}<br />
                                            Está em terceiro com {limiteClassificacao[2].punctuation} pontos
                                        </h3>
                                    </a>
                                </Link>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

            {/* GRID DE CLASSIFICAÇÃO - INFORMAÇÕES */}
            {limiteClassificacao.map((classif, index) => (
                <div key={classif.pilot._id} className="container mx-auto px-4 md:px-12 md:grid grid-flow-col">
                    <div className="container my-2 mx-auto md:px-12 w-11/12 ">
                        <div className="flex justify-center -mx-1 md:-mx-4">
                            <div className="my-1 px-1 w-full">
                                <article className="overflow-hidden rounded-lg shadow-lg rounded-l-3xl rounded-r-3xl px-2 hover:bg-gray-400 -mt-1 md:-mt-5 bg-gray-100">
                                    <Link href={`/pilotos/${classif.pilot._id}`}>
                                        <a className="no-underline text-black">
                                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                <h1 className="classA text-1xl font-bold">
                                                    {index + 1} - {classif.pilot.name}
                                                </h1>
                                                <h1 className="classA text-1xl font-bold justify-end">
                                                    {classif.punctuation} PTS
                                                </h1>
                                            </header>
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* BOTÃO VER CLASSIFICAÇÃO COMPLETA */}
            <div className="flex justify-center text-5xl mt-2 md:mt-0">
                <a href="/classificacao">
                    <button className="flex items-center font-bold text-white bg-red-500 hover:bg-black py-1 px-3 focus:outline-none rounded text-xl md:mt-0 ">
                        VER CLASSIFICAÇÃO COMPLETA
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </a>
            </div>

            {/* VÍDEO INTRODUÇÃO */}
            <div className="flex justify-center max-w-full mt-4">
                <iframe className="rounded-3xl shadow-lg" width="560" height="315" src="https://www.youtube.com/embed/0dRzxpC0ggI"
                    title="Pilotos da Vila" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </Layout>
    )
};
Noticia.getInitialProps = async () => {
    const { data: noticias } = await axios.get('https://portalnoticia-backend.herokuapp.com/news');
    const { data: classificacao } = await axios.get('https://portalnoticia-backend.herokuapp.com/classification');
    const reverse = noticias.reverse();
    const reverseSlice = reverse.slice(3);
    const maxNews = reverseSlice.slice(0, 2);
    function compare(a, b) {
        if (a.punctuation > b.punctuation) {
            return -1;
        }
        if (a.punctuation > b.punctuation) {
            return 1;
        }
        return 0;
    }
    classificacao.sort(compare);
    const limiteClassificacao = classificacao.slice(0, 10)
    return {
        reverse,
        maxNews,
        limiteClassificacao
    }
}
export default Noticia;