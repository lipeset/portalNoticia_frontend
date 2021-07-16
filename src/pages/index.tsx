import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import Races from '../components/Races';
import { format } from 'date-fns';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000"
        },
        secondary: {
            main: "#991C1C"
        }
    }
});

const Noticia = ({ reverse, maxNews, limiteClassificacaoPilotos, limiteClassificacaoEquipes, equipe }) => {
    function matchName(id) {
        for (var i = 0; i < 10; i++) {
            if (id == equipe[i]._id) {
                return equipe[i].alias
            } else {
                continue
            }
        }
    };
    interface TabPanelProps {
        children?: React.ReactNode;
        index: any;
        value: any;
    }
    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}>
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    function a11yProps(index: any) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
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
                                <h3 className="flex items-center text-justify leading-tight p-2 md:p-4" >
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
                                <h3 className="flex items-center text-justify leading-tight p-2 md:p-4" >
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
                                <h3 className="flex items-center text-justify leading-tight p-2 md:p-4" >
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
                                    <h3 className="flex items-center text-justify leading-tight p-2 md:p-4" >
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

            <h3 className="flex justify-center text-5xl mb-3 mt-2 md:mt-0">CLASSIFICAÇÃO</h3>
            <ThemeProvider theme={theme}>
                <AppBar position="relative" color="primary">
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="PILOTOS" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(0)} />
                        <Tab label="EQUIPES" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
            </ThemeProvider>

            <TabPanel value={value} index={0}>
                {/* GRID DE CLASSIFICAÇÃO - FOTOS PILOTOS */}
                <div className="container mx-auto px-4 md:px-12 md:grid grid-cols-3 grid-flow-col">
                    <div className="hidden md:block container my-2 mx-auto md:px-12 w-11/12 -mr-14">
                        <div className="flex justify-end -mx-1 md:-mx-4">
                            <div key={limiteClassificacaoPilotos[1].pilot._id} className="my-1 px-1 w-full">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-green-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                    <img key={limiteClassificacaoPilotos[1].pilot._id} className="flex flex-none rounded-3xl" src={limiteClassificacaoPilotos[1].pilot.gridUrl} />
                                    <Link href={`/pilotos/${limiteClassificacaoPilotos[1].pilot._id}`}>
                                        <a className="no-underline hover:underline text-black">
                                            <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                                {limiteClassificacaoPilotos[1].pilot.name}<br /> Está em segundo com {limiteClassificacaoPilotos[1].punctuation} pontos
                                            </h3>
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="container my-2 mx-auto md:px-12">
                        <div className="flex justify-center -mx-1 md:-mx-4">
                            <div key={limiteClassificacaoPilotos[0].pilot._id} className="my-1 px-1 w-full">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-yellow-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                    <img key={limiteClassificacaoPilotos[0].pilot._id} className="flex flex-none rounded-3xl" src={limiteClassificacaoPilotos[0].pilot.gridUrl} />
                                    <Link href={`/pilotos/${limiteClassificacaoPilotos[0].pilot._id}`}>
                                        <a className="no-underline hover:underline text-black">
                                            <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                                {limiteClassificacaoPilotos[0].pilot.name}<br /> Está em primeiro com {limiteClassificacaoPilotos[0].punctuation} pontos
                                            </h3>
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block container my-2 mx-auto md:px-12 w-11/12 -ml-14">
                        <div className="flex justify-start -mx-1 md:-mx-4">
                            <div key={limiteClassificacaoPilotos[2].pilot._id} className="my-1 px-1 w-full">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-red-800 hover:border-red-800 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                    <img key={limiteClassificacaoPilotos[2].pilot._id} className="flex flex-none rounded-3xl" src={limiteClassificacaoPilotos[2].pilot.gridUrl} />
                                    <Link href={`/pilotos/${limiteClassificacaoPilotos[2].pilot._id}`}>
                                        <a className="no-underline hover:underline text-black">
                                            <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                                {limiteClassificacaoPilotos[2].pilot.name}<br /> Está em terceiro com {limiteClassificacaoPilotos[2].punctuation} pontos
                                            </h3>
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GRID DE CLASSIFICAÇÃO - INFORMAÇÕES PILOTOS */}
                {limiteClassificacaoPilotos.map((classif, index) => (
                    <div key={classif.pilot._id} className="container mx-auto px-4 md:px-12 md:grid grid-flow-col">
                        <div className="container my-2 mx-auto md:px-12 w-11/12 ">
                            <div className="flex justify-center -mx-1 md:-mx-4">
                                <div className="my-1 px-1 w-full">
                                    <article className="overflow-hidden rounded-lg shadow-lg rounded-l-3xl rounded-r-3xl px-2 hover:bg-gray-400 -mt-1 md:-mt-4 bg-gray-300">
                                        <Link href={`/pilotos/${classif.pilot._id}`}>
                                            <a className="no-underline text-black">
                                                <header className="grid grid-cols-3 md:grid-cols-4 leading-tight p-2 md:p-4">
                                                    <h1 className="classA text-1xl font-bold text-center -ml-16 md:-ml-72">
                                                        {index + 1}
                                                    </h1>
                                                    <h1 className="classA text-1xl font-bold -ml-14 md:-ml-64">
                                                        {classif.pilot.name}
                                                    </h1>
                                                    <h1 className="classA text-xs font-bold text-center -ml-64 hidden md:block">
                                                        {matchName(classif.pilot.team)}
                                                    </h1>
                                                    <h1 className="classA text-1xl ml-8 md:ml-52 font-bold justify-end">
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
            </TabPanel>

            <TabPanel value={value} index={1}>
                {/* GRID DE CLASSIFICAÇÃO - FOTOS EQUIPES */}
                <div className="container mx-auto px-4 md:px-12 md:grid grid-cols-3 grid-flow-col">
                    <div className="hidden md:block container my-2 mx-auto md:px-12 w-11/12 -mr-14">
                        <div className="flex justify-end -mx-1 md:-mx-4">
                            <div key={limiteClassificacaoEquipes[1].team._id} className="my-1 px-1 w-full">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-green-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                    <img key={limiteClassificacaoEquipes[1].team._id} className="flex flex-none rounded-3xl" src={limiteClassificacaoEquipes[1].team.gridUrl} />
                                    <Link href={`/equipes/${limiteClassificacaoEquipes[1].team._id}`}>
                                        <a className="no-underline hover:underline text-black">
                                            <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                                {limiteClassificacaoEquipes[1].team.alias}<br />
                                                Está em segundo com {limiteClassificacaoEquipes[1].punctuation} pontos
                                            </h3>
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="container my-2 mx-auto md:px-12">
                        <div className="flex justify-center -mx-1 md:-mx-4">
                            <div key={limiteClassificacaoEquipes[0].team._id} className="my-1 px-1 w-full">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                    <img key={limiteClassificacaoEquipes[0].team._id} className="flex flex-none rounded-3xl" src={limiteClassificacaoEquipes[0].team.gridUrl} />
                                    <Link href={`/equipes/${limiteClassificacaoEquipes[0].team._id}`}>
                                        <a className="no-underline hover:underline text-black">
                                            <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                                {limiteClassificacaoEquipes[0].team.alias}<br />
                                                Está em primeiro com {limiteClassificacaoEquipes[0].punctuation} pontos
                                            </h3>
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block container my-2 mx-auto md:px-12 w-11/12 -ml-14">
                        <div className="flex justify-start -mx-1 md:-mx-4">
                            <div key={limiteClassificacaoEquipes[2].team._id} className="my-1 px-1 w-full">
                                <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                border-red-800 hover:border-red-800 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                    <img key={limiteClassificacaoEquipes[2].team._id} className="flex flex-none rounded-3xl" src={limiteClassificacaoEquipes[2].team.gridUrl} />
                                    <Link href={`/equipes/${limiteClassificacaoEquipes[2].team._id}`}>
                                        <a className="no-underline hover:underline text-black">
                                            <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                                {limiteClassificacaoEquipes[2].team.alias}<br />
                                                Está em terceiro com {limiteClassificacaoEquipes[2].punctuation} pontos
                                            </h3>
                                        </a>
                                    </Link>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GRID DE CLASSIFICAÇÃO - INFORMAÇÕES EQUIPES */}
                {limiteClassificacaoEquipes.map((classif, index) => (
                    <div key={classif.team._id} className="container mx-auto px-4 md:px-12 md:grid grid-flow-col">
                        <div className="container my-2 mx-auto md:px-12 w-11/12 ">
                            <div className="flex justify-center -mx-1 md:-mx-4">
                                <div className="my-1 px-1 w-full">
                                    <article className="overflow-hidden rounded-lg shadow-lg rounded-l-3xl rounded-r-3xl px-2 hover:bg-gray-400 -mt-1 md:-mt-4 bg-gray-100">
                                        <Link href={`/equipes/${classif.team._id}`}>
                                            <a className="no-underline text-black">
                                                <header className="grid grid-cols-3 md:grid-cols-4 leading-tight p-2 md:p-4">
                                                    <h1 className="classA text-1xl font-bold text-center -ml-16 md:-ml-72">
                                                        {index + 1}
                                                    </h1>
                                                    <h1 className="classA text-1xl font-bold -ml-14 md:-ml-64">
                                                        {classif.team.alias}
                                                    </h1>
                                                    <h1 className="hidden md:block"></h1>
                                                    <h1 className="classA text-1xl ml-8 md:ml-52 font-bold justify-end">
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
            </TabPanel>

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
            <div className="flex justify-center">
                <div className="video-container mt-3 flex justify-center max-w-4xl">
                    <iframe className="rounded-3xl shadow-lg" src="https://www.youtube.com/embed/lF1ClCGFJHU"
                        title="Pilotos da Vila" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
            </div>
        </Layout>
    )
};
Noticia.getInitialProps = async () => {
    const { data: noticias } = await axios.get('https://portalnoticia-backend.herokuapp.com/news');
    const { data: classificacaoPilotos } = await axios.get('https://portalnoticia-backend.herokuapp.com/pilotclassification');
    const { data: classificacaoEquipes } = await axios.get('https://portalnoticia-backend.herokuapp.com/teamclassification');
    const { data: equipe } = await axios.get('https://portalnoticia-backend.herokuapp.com/teams');

    const reverse = noticias.reverse();
    const reverseSlice = reverse.slice(3);
    const maxNews = reverseSlice.slice(0, 2);

    function compare(a, b) {
        if (a.punctuation == b.punctuation) {
            if (a.win > b.win) {
                return -1;
            }
        }
        if (a.punctuation > b.punctuation) {
            return -1;
        }
        if (a.punctuation > b.punctuation) {
            return 1;
        }
        return 0;
    }
    classificacaoPilotos.sort(compare);
    classificacaoEquipes.sort(compare);

    const limiteClassificacaoPilotos = classificacaoPilotos.slice(0, 10)
    const limiteClassificacaoEquipes = classificacaoEquipes.slice(0, 9)

    return {
        reverse,
        maxNews,
        limiteClassificacaoPilotos,
        limiteClassificacaoEquipes,
        equipe
    }
}
export default Noticia;