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

// TERCEIRA ETAPA FINALIZADA

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

const Corrida = ({ reorder_piloto, reorder_equipe, quarta_etapa, reorder_bestlap }) => {
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
                    <h1 className="text-center my-4 text-4xl md:text-6xl">{quarta_etapa.granprix}</h1>
                    <p className="text-center text-xl mb-5">Os principais acontecimentos: Os principais acontecimentos: Mais uma vez a festa vai para a gigante francesa Renault!
                        Rodrigo, que largou em 2º, levou a melhor sobre os adversários! Já seu companheiro de equipe Igor, pegou dois karts danificados, acabou por nem competir de
                        fato, apenas “curtiu a viagem”.<br /> A Mercedes apesar de ter perdido a vitória, conseguiu faturar 29 pontos para o campeonato de equipes, que está muito
                        acirrado com a Red Bull. Lucas Santos, que foi o grande destaque da prova, largando em 15º e chegando em 2º e Davi chegando em 9º.<br /> Já a Red Bull
                        teve um desempenho abaixo do esperado... sua melhor posição foi o 3º lugar, do piloto Lucas Poquiviqui... já o piloto Robson ficou apenas em 5º lugar.
                        Podemos esperar uma RBR bem diferente para Interlagos.<br /> Um destaque positivo vai para a Williams, que conseguiu colocar um dos seus pilotos no pódio!
                        Felipe que vinha de uma série de corridas não limpas, conseguiu faturar um 4º lugar na prova! Fábio Andradas infelizmente não pode se concentrar na
                        corrida, pois seu celular caiu na pista durante o treino e foi destruído...<br /> A Aston Martin seguiu sem muitas surpresas, Rafael conseguiu o 6º lugar
                        no pódio. Já seu parceiro Pedro Henrique amargou apenas a 11ª posição.<br /> Como destaque negativo dessa prova podemos apontar a equipe da Ferrari!
                        Fazendo a pole e o 4º lugar com Marcos e Klaus respectivamente, não conseguiu nada mais que um 7º lugar durante a corrida... Um fim de semana a ser
                        esquecido pela Ferrari, que promete chegar em Interlagos para a vitória!<br /> Em uma estratégia de equipe um tanto conturbada, a Haas acabou colidindo
                        os seus dois pilotos, colocando-os em 12º e 13º colocados. Mais uma equipe que deseja esquecer esse fim de semana.<br /> A grande surpresa da noite vai
                        para a McLaren, mais especificamente para o Bruno. Passou a corrida toda em 3º lugar acompanhando a briga da ponta, quando a roda do seu carro saiu na
                        15ª volta, forçando-o a abandonar a prova! Fernando chegou em penúltimo, em 15º lugar.
                        {/* Você pode conferir a matéria completa no nosso canal do
                    Youtube <b><a className="classA" href="https://youtu.be/hUJ2ZHyABHM" target="_blank">clicando aqui!!</a></b> */}
                    </p>

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
                                    border-yellow-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_piloto[1].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[1]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_piloto[1].name}</b><br />
                                                    Ficou em <b>SEGUNDO</b> e marcou {reorder_piloto[1].fourthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_piloto[1].fourthBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12 md:w-full">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-red-800 hover:border-red-800 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_piloto[0].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[0]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_piloto[0].name}</b><br />
                                                    Ficou em <b>PRIMEIRO</b> e marcou {reorder_piloto[0].fourthGpPoints} pontos<br />
                                                    Sua melhor volta foi: <Background className="font-bold text-white">{reorder_piloto[0].fourthBestLap}</Background>
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-green-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_piloto[2].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[2]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_piloto[2].name}</b><br />
                                                    Ficou em <b>TERCEIRO</b> e marcou {reorder_piloto[2].fourthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_piloto[2].fourthBestLap}
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
                                                    <h1 className="classA text-1xl ml-12 md:ml-64 font-bold">
                                                        {piloto.fourthGpPoints} PTS
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
                                                    Ficou em <b>SEGUNDO</b> faturando {reorder_equipe[1].fourthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_equipe[1].fourthBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12 md:w-full">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-red-800 hover:border-red-800 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_equipe[0].gridUrl} />
                                        <Link href={`/equipes/${reorder_equipe[0]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_equipe[0].alias}</b><br />
                                                    Ficou em <b>PRIMEIRO</b> faturando {reorder_equipe[0].fourthGpPoints} pontos<br />
                                                    Sua melhor volta foi: <Background className="font-bold text-white">{reorder_equipe[0].fourthBestLap}</Background>
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-yellow-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_equipe[2].gridUrl} />
                                        <Link href={`/equipes/${reorder_equipe[2]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_equipe[2].alias}</b><br />
                                                    Ficou em <b>TERCEIRO</b> faturando {reorder_equipe[2].fourthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_equipe[2].fourthBestLap}
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
                                                        {equipe.fourthGpPoints} PTS
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
                                                    Teve a <b>SEGUNDA</b> melhor volta: {reorder_bestlap[1].fourthBestLap}<br />
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12 md:w-full">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-red-800 hover:border-red-800 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_bestlap[0].gridUrl} />
                                        <Link href={`/pilotos/${reorder_bestlap[0]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_bestlap[0].name}</b><br />
                                                    Teve a <b>MELHOR VOLTA</b>: <Background className="font-bold text-white">{reorder_bestlap[0].fourthBestLap}</Background><br />
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
                                    border-yellow-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_bestlap[2].gridUrl} />
                                        <Link href={`/pilotos/${reorder_bestlap[2]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_bestlap[2].name}</b><br />
                                                    Teve a <b>TERCEIRA</b> melhor volta: {reorder_bestlap[2].fourthBestLap}<br />
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
                                                        {piloto.fourthBestLap}
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
    const { data: quarta_etapa } = await axios.get('http://portalnoticia-backend.herokuapp.com/lastrace/60c74665c900e200048d25a1');
    const { data: quarta_etapaLap } = await axios.get('http://portalnoticia-backend.herokuapp.com/lastrace/60c74665c900e200048d25a1');
    const reorder_piloto = quarta_etapa.pilot
    const reorder_equipe = quarta_etapa.team
    const reorder_bestlap = quarta_etapaLap.pilot

    reorder_piloto.sort(comparePoints);
    reorder_equipe.sort(comparePoints);
    reorder_bestlap.sort(compareLaps);

    function comparePoints(a, b) {
        if (a.fourthGpPoints > b.fourthGpPoints) {
            return -1;
        }
        if (a.fourthGpPoints > b.fourthGpPoints) {
            return 1;
        }
        if (a.fourthGpPoints > b.fourthGpPoints) {
            if (a.fourthGpFinish > b.fourthGpFinish) {
                return -1;
            }
            if (a.fourthGpFinish > b.fourthGpFinish) {
                return 1;
            }
        }
    }
    function compareLaps(a, b) {
        if (a.fourthBestLap > b.fourthBestLap) {
            return -1;
        }
        if (a.fourthBestLap > b.fourthBestLap) {
            return 1;
        }
        return 0
    }
    reorder_bestlap.reverse();

    return {
        quarta_etapa,
        reorder_piloto,
        reorder_equipe,
        reorder_bestlap
    }
}
export default Corrida;