import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import styled from "styled-components";

const Background = styled.label`
    background-color: #ff51f1;
`;

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffffff"
        },
        secondary: {
            main: "#991C1C"
        }
    }
});

const Corrida = ({ reorder_piloto, reorder_equipe, primeira_etapa, reorder_bestlap }) => {
    function matchName(id) {
        for (var i = 0; i < 10; i++) {
            if (id == reorder_equipe[i]._id) {
                return reorder_equipe[i].alias
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
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg pb-1">
                    <h1 className="text-center my-4 text-4xl md:text-6xl">{primeira_etapa.granprix}</h1>
                    <p className="text-center text-xl mb-5">Os principais acontecimentos: Com uma corrida conturbada e rodeada de polêmicas, alguns pilotos
                    foram prejudicados por diversos fatores. Felipe (Williams), Maurício (Alfa Romeo), Robson (Red Bull) foram obrigados a trocarem seus karts
                    pois apresentavam problemas graves.<br /> Durante a corrida, dois acidentes acabaram prejudicando o rendimento de alguns pilotos... Marcos (Ferrari)
                    acabou colidindo com Leonardo (Alfa Romeo) e foi para grama, perdendo posições importantes... Felipe (Williams) chocou-se de "frente" com o mesmo
                    Leonardo e acabou indo para o muro, também perdendo posições...<br /> Lucas Santos (Mercedes) e Robson deram um show a parte (Robson conquistou o ponto
                    extra de melhor volta), liderando isolados do início ao fim! Lucas Poquiviqui (Red Bull) garantiu a pontuação pra equipe com um ótimo terceiro
                    lugar.<br /> Leonardo sofreu uma punição por desrespeito a bandeira azul. <br /> Você pode conferir a matéria completa no nosso canal do
                    Youtube <b><a className="classA" href="https://youtu.be/Lunf0yTVlnE" target="_blank">clicando aqui!!</a></b></p>

                    <ThemeProvider theme={theme}>
                        <AppBar position="relative" color="primary">
                            <Tabs value={value} onChange={handleChange} centered>
                                <Tab label="PILOTOS" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(0)} />
                                <Tab label="EQUIPES" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(1)} />
                                <Tab label="VOLTAS RÁPIDAS" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                    </ThemeProvider>

                    <TabPanel value={value} index={0}>
                        {/* GRID DE CLASSIFICAÇÃO - FOTOS PILOTOS */}
                        <h1 className="text-center my-3 text-2xl md:text-4xl">Os três primeiros colocados:</h1>
                        <div className="mx-auto md:grid grid-cols-3 grid-flow-col">
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_piloto[1].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[1]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_piloto[1].name}</b><br />
                                                    Ficou em <b>SEGUNDO</b> e marcou {reorder_piloto[1].firstGpPoints} pontos<br />
                                                    Sua melhor volta foi: <Background className="font-bold text-white">{reorder_piloto[1].firstBestLap}</Background>
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12 md:w-full">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-green-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_piloto[0].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[0]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_piloto[0].name}</b><br />
                                                    Ficou em <b>PRIMEIRO</b> e marcou {reorder_piloto[0].firstGpPoints} pontos<br />
                                                    Sua melhor volta foi: <Background className="font-bold text-white"></Background>{reorder_piloto[0].firstBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_piloto[2].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[2]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_piloto[2].name}</b><br />
                                                    Ficou em <b>TERCEIRO</b> e marcou {reorder_piloto[2].firstGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_piloto[2].firstBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* GRID DE CLASSIFICAÇÃO - INFORMAÇÕES PILOTOS */}
                        <h1 className="text-center my-3 text-2xl md:text-4xl">O restante do grid ficou assim:</h1>
                        {reorder_piloto.slice(3).map((piloto, index) => (
                            <div key={piloto._id} className="md:grid grid-flow-col">
                                <div className="my-2 mx-auto md:px-12 w-full px-2">
                                    <article className="rounded-lg shadow-lg rounded-l-3xl rounded-r-3xl px-2 
                                        hover:bg-gray-400 -mt-1 md:-mt-3 bg-gray-300">
                                        <Link href={`/pilotos/${piloto._id}`}>
                                            <a className="no-underline">
                                                <header className="grid grid-cols-3 md:grid-cols-4 p-2 md:p-3">
                                                    <h1 className="classA text-1xl font-bold text-center -ml-24 md:-ml-80">
                                                        {index + 4}
                                                    </h1>
                                                    <h1 className="classA text-1xl font-bold -ml-16 md:-ml-72">
                                                        <h1>{piloto.name}</h1>
                                                    </h1>
                                                    <h1 className="classA font-bold text-center -ml-72 hidden md:block">
                                                        {matchName(piloto.team)}
                                                    </h1>
                                                    <h1 className="classA text-1xl ml-12 md:ml-64 font-bold">
                                                        {piloto.firstGpPoints} PTS
                                                    </h1>
                                                </header>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        {/* GRID DE CLASSIFICAÇÃO - FOTOS EQUIPES */}
                        <h1 className="text-center my-3 text-2xl md:text-4xl">As equipes que mais pontuaram:</h1>
                        <div className="mx-auto md:grid grid-cols-3 grid-flow-col">
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-green-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_equipe[1].gridUrl} />
                                        <Link href={`/equipes/${reorder_equipe[1]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_equipe[1].alias}</b><br />
                                                    Ficou em <b>SEGUNDO</b> faturando {reorder_equipe[1].firstGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_equipe[1].firstBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12 md:w-full">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_equipe[0].gridUrl} />
                                        <Link href={`/equipes/${reorder_equipe[0]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_equipe[0].alias}</b><br />
                                                    Ficou em <b>PRIMEIRO</b> faturando {reorder_equipe[0].firstGpPoints} pontos<br />
                                                    Sua melhor volta foi: <Background className="font-bold text-white">{reorder_equipe[0].firstBestLap}</Background>
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-red-800 hover:border-red-800 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_equipe[2].gridUrl} />
                                        <Link href={`/equipes/${reorder_equipe[2]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_equipe[2].alias}</b><br />
                                                    Ficou em <b>TERCEIRO</b> faturando {reorder_equipe[2].firstGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_equipe[2].firstBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* GRID DE CLASSIFICAÇÃO - INFORMAÇÕES EQUIPES */}
                        <h1 className="text-center my-3 text-2xl md:text-4xl">O restante do grid ficou assim:</h1>
                        {reorder_equipe.slice(3).map((equipe, index) => (
                            <div key={equipe._id} className="md:grid grid-flow-col">
                                <div className="my-2 mx-auto md:px-12 w-full px-2">
                                    <article className="rounded-lg shadow-lg rounded-l-3xl rounded-r-3xl px-2 
                                        hover:bg-gray-400 -mt-1 md:-mt-3 bg-gray-300">
                                        <Link href={`/pilotos/${equipe._id}`}>
                                            <a className="no-underline">
                                                <header className="grid grid-cols-3 md:grid-cols-3 p-2 md:p-3">
                                                    <h1 className="classA text-1xl font-bold text-center -ml-24 md:-ml-96">
                                                        {index + 4}
                                                    </h1>
                                                    <h1 className="classA text-1xl font-bold -ml-16 md:-ml-96">
                                                        <h1>{equipe.alias}</h1>
                                                    </h1>
                                                    <h1 className="classA text-1xl font-bold ml-12 md:ml-96">
                                                        {equipe.firstGpPoints} PTS
                                                    </h1>
                                                </header>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        {/* GRID DE MELHOR VOLTA - FOTOS PILOTOS */}
                        <h1 className="text-center my-3 text-2xl md:text-4xl">Aqui você pode conferir a melhor volta individual:</h1>
                        <div className="mx-auto md:grid grid-cols-3 grid-flow-col">
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-green-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_bestlap[1].gridUrl} />
                                        <Link href={`/pilotos/${reorder_bestlap[1]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_bestlap[1].name}</b><br />
                                                    Teve a <b>SEGUNDA</b> melhor volta: {reorder_bestlap[1].firstBestLap}<br />
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12 md:w-full">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_bestlap[0].gridUrl} />
                                        <Link href={`/pilotos/${reorder_bestlap[0]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_bestlap[0].name}</b><br />
                                                    Teve a <b>MELHOR VOLTA</b>: <Background className="font-bold text-white">{reorder_bestlap[0].firstBestLap}</Background><br />
                                                    Conquistando assim o ponto extra!
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-blue-800 hover:border-red-500 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_bestlap[2].gridUrl} />
                                        <Link href={`/pilotos/${reorder_bestlap[2]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_bestlap[2].name}</b><br />
                                                    Teve a <b>TERCEIRA</b> melhor volta: {reorder_bestlap[2].firstBestLap}<br />
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* GRID DE CLASSIFICAÇÃO - INFORMAÇÕES PILOTOS */}
                        <h1 className="text-center my-3 text-2xl md:text-4xl">O restante das voltas de cada um:</h1>
                        {reorder_bestlap.slice(3).map((piloto, index) => (
                            <div key={piloto._id} className="md:grid grid-flow-col">
                                <div className="my-2 mx-auto md:px-12 w-full px-2">
                                    <article className="overflow-hidden rounded-lg shadow-lg rounded-l-3xl rounded-r-3xl px-2 
                                        hover:bg-gray-400 -mt-1 md:-mt-3 bg-gray-300">
                                        <Link href={`/pilotos/${piloto._id}`}>
                                            <a className="no-underline">
                                                <header className="grid grid-cols-3 md:grid-cols-4 p-2 md:p-3">
                                                    <h1 className="classA text-1xl font-bold text-center -ml-24 md:-ml-80">
                                                        {index + 4}
                                                    </h1>
                                                    <h1 className="classA text-1xl font-bold -ml-16 md:-ml-72">
                                                        <h1>{piloto.name}</h1>
                                                    </h1>
                                                    <h1 className="classA font-bold text-center -ml-72 hidden md:block">
                                                        {matchName(piloto.team)}
                                                    </h1>
                                                    <h1 className="classA text-1xl text-center ml-4 md:ml-64 font-bold">
                                                        {piloto.firstBestLap}
                                                    </h1>
                                                </header>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        ))}
                    </TabPanel>
                </div>
            </div>
        </Layout>
    )
}
Corrida.getInitialProps = async () => {
    const { data: primeira_etapa } = await axios.get('https://portalnoticia-backend.herokuapp.com/lastrace/607d942c46593f0004e47878');
    const { data: primeira_etapaLap } = await axios.get('https://portalnoticia-backend.herokuapp.com/lastrace/607d942c46593f0004e47878');
    const reorder_piloto = primeira_etapa.pilot
    const reorder_equipe = primeira_etapa.team
    const reorder_bestlap = primeira_etapaLap.pilot

    reorder_piloto.sort(comparePoints);
    reorder_equipe.sort(comparePoints);
    reorder_bestlap.sort(compareLaps);

    function comparePoints(a, b) {
        if (a.firstGpPoints > b.firstGpPoints) {
            return -1;
        }
        if (a.firstGpPoints > b.firstGpPoints) {
            return 1;
        }
        if (a.firstGpPoints > b.firstGpPoints) {
            if (a.firstGpFinish > b.firstGpFinish) {
                return -1;
            }
            if (a.firstGpFinish > b.firstGpFinish) {
                return 1;
            }
        }
    }
    function compareLaps(a, b) {
        if (a.firstBestLap > b.firstBestLap) {
            return -1;
        }
        if (a.firstBestLap > b.firstBestLap) {
            return 1;
        }
        return 0
    }
    reorder_bestlap.reverse();

    return {
        primeira_etapa,
        reorder_piloto,
        reorder_equipe,
        reorder_bestlap
    }
}
export default Corrida;