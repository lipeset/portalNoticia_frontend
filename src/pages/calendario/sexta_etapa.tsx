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

// SEXTA ETAPA FINALIZADA

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

const Corrida = ({ reorder_piloto, reorder_equipe, sexta_etapa, reorder_bestlap }) => {
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
                    <h1 className="text-center my-4 text-4xl md:text-6xl">{sexta_etapa.granprix}</h1>
                    <p className="text-center text-xl mb-5">Os principais acontecimentos: ???Se voc?? quer ser bem sucedido, precisa ter dedica????o total, buscar seu ??ltimo limite e
                        dar o melhor de si mesmo??? ??? Senna, Ayrton???. ?? necess??rio come??ar dessa forma pois a noite foi dele, Bruno Senninha, que conquistou a sua primeira vit??ria
                        no campeonato! Depois de muita luta e muitos revezes, ele conquistou com muita briga a sua primeira vit??ria!! J?? seu companheiro de equipe precisou sair da
                        prova por problemas de sa??de.<br /> Rafael, piloto da Aston Martin, conseguiu tamb??m sua melhor coloca????o no campeonato, chegando em segundo lugar, tamb??m
                        muit??ssimo disputado. Pedro Henrique n??o participou da corrida.<br />Mais um que quebrou seu recorde pessoal foi Felipe, piloto da Williams, que alcan??ou
                        a terceira coloca????o no p??dio. Participou tamb??m da briga pelo primeiro lugar, trazendo emo????o para a corrida. O outro piloto da Williams, Fabio Andradas,
                        fez sua corrida de despedida, chegando em 13?? lugar.<br />A Renault est?? em festa, j?? que a 4?? posi????o conquistada por Rodrigo, deu a ele o t??tulo no
                        campeonato de pilotos. Participou n??o diretamente da briga pelo primeiro lugar, mas esteve entre o top 4 da metade para o final da prova. O piloto Igor que
                        fez a sua corrida mais regular no campeonato, conquistou a 14?? coloca????o, mas a evolu????o fica evidente quando vemos a regularidade nas voltas.<br /> Os
                        pilotos da Ferrari Klaus e Marcos chegaram em 5?? e 8?? respectivamente, garantindo o 3?? lugar no campeonato de construtores. Fizeram uma corrida regular e
                        tranquila dentro do poss??vel, sem muitas novidades.<br />J?? a Haas tamb??m pode comemorar pois seu piloto Alexandre conquistou seu primeiro p??dio por conta
                        de uma puni????o aplicada em um dos pilotos da Red Bull. Pedro Rabello amargou apenas a 11?? posi????o do grid.<br />Um fim de semana amargo pra Mercedes pois
                        a etapa era important??ssima para a disputa do t??tulo. Lucas Santos que teve problemas na qualifica????o, infelizmente teve dois incidentes durante a prova
                        chegou em 7?? e Davi, que chegou em 10?? n??o conseguiram tirar a diferen??a de 9 pontos para a Red Bull. A diferen??a ficou em apenas 5 pontos.<br /> A ??ustria
                        comemora! Em ??xtase pelo t??tulo de construtores, as posi????es abaixo do normal de Robson em 9?? e Lucas em 12??, n??o abalarem em nada a equipe. Com esse
                        resultado, eles levaram o t??tulo por 5 pontos a frente da rival Mercedes.<br />J?? a Alfa Romeo que n??o participou das duas ??ltimas etapas, anunciou a troca
                        dos dois pilotos. Leonardo que ainda fez a sua ??ltima participa????o nesta corrida, apenas amargou o 15?? lugar no grid. O que ser?? que a Alfa Romeo ir?? trazer
                        para o futuro? Nos resta aguardar.
                        {/* Voc?? pode conferir a mat??ria completa no nosso canal do
                    Youtube <b><a className="classA" href="https://youtu.be/hUJ2ZHyABHM" target="_blank">clicando aqui!!</a></b> */}
                    </p>

                    <ThemeProvider theme={theme}>
                        <AppBar position="relative" color="primary">
                            <Tabs value={value} onChange={handleChange} centered>
                                <Tab label="PILOTOS" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(0)} />
                                <Tab label="EQUIPES" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(1)} />
                                <Tab label="VOLTAS R??PIDAS" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                    </ThemeProvider>

                    <TabPanel value={value} index={0}>
                        {/* GRID DE CLASSIFICA????O - FOTOS PILOTOS */}
                        <h1 className="text-center my-3 text-2xl md:text-4xl">Os tr??s primeiros colocados:</h1>
                        <div className="mx-auto md:grid grid-cols-3 grid-flow-col">
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-green-900 hover:border-red-800 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_piloto[1].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[1]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_piloto[1].name}</b><br />
                                                    Ficou em <b>SEGUNDO</b> e marcou {reorder_piloto[1].sixthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_piloto[1].sixthBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12 md:w-full">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-red-500 hover:border-white border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_piloto[0].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[0]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_piloto[0].name}</b><br />
                                                    Ficou em <b>PRIMEIRO</b> e marcou {reorder_piloto[0].sixthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_piloto[0].sixthBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-blue-300 hover:border-white border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_piloto[2].gridUrl} />
                                        <Link href={`/pilotos/${reorder_piloto[2]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_piloto[2].name}</b><br />
                                                    Ficou em <b>TERCEIRO</b> e marcou {reorder_piloto[2].sixthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_piloto[2].sixthBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* GRID DE CLASSIFICA????O - INFORMA????ES PILOTOS */}
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
                                                        {piloto.sixthGpPoints} PTS
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
                        {/* GRID DE CLASSIFICA????O - FOTOS EQUIPES */}
                        <h1 className="text-center my-3 text-2xl md:text-4xl">As equipes que mais pontuaram:</h1>
                        <div className="mx-auto md:grid grid-cols-3 grid-flow-col">
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-red-500 hover:border-white border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_equipe[1].gridUrl} />
                                        <Link href={`/equipes/${reorder_equipe[1]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_equipe[1].alias}</b><br />
                                                    Ficou em <b>SEGUNDO</b> faturando {reorder_equipe[1].sixthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_equipe[1].sixthBestLap}
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
                                                    Ficou em <b>PRIMEIRO</b> faturando {reorder_equipe[0].sixthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_equipe[0].sixthBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-blue-300 hover:border-white border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_equipe[2].gridUrl} />
                                        <Link href={`/equipes/${reorder_equipe[2]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_equipe[2].alias}</b><br />
                                                    Ficou em <b>TERCEIRO</b> faturando {reorder_equipe[2].sixthGpPoints} pontos<br />
                                                    Sua melhor volta foi: {reorder_equipe[2].sixthBestLap}
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* GRID DE CLASSIFICA????O - INFORMA????ES EQUIPES */}
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
                                                        {equipe.sixthGpPoints} PTS
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
                        <h1 className="text-center my-3 text-2xl md:text-4xl">Aqui voc?? pode conferir a melhor volta individual:</h1>
                        <div className="mx-auto md:grid grid-cols-3 grid-flow-col">
                            <div className="my-2 mx-auto md:px-12 w-11/12">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-green-900 hover:border-red-800 border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_bestlap[1].gridUrl} />
                                        <Link href={`/pilotos/${reorder_bestlap[1]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_bestlap[1].name}</b><br />
                                                    Teve a <b>SEGUNDA</b> melhor volta: {reorder_bestlap[1].sixthBestLap}<br />
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                            <div className="my-2 mx-auto md:px-12 w-11/12 md:w-full">
                                <div className="flex justify-end -mx-1 md:-mx-4">
                                    <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg
                                    border-yellow-300 hover:border-black border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_bestlap[0].gridUrl} />
                                        <Link href={`/pilotos/${reorder_bestlap[0]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_bestlap[0].name}</b><br />
                                                    Teve a <b>MELHOR VOLTA</b>: <Background className="font-bold text-white">{reorder_bestlap[0].sixthBestLap}</Background><br />
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
                                    border-blue-300 hover:border-white border-b-2 border-l-2 border-r-2 rounded-l-3xl rounded-r-3xl px-2">
                                        <img className="flex flex-none rounded-3xl" src={reorder_bestlap[2].gridUrl} />
                                        <Link href={`/pilotos/${reorder_bestlap[2]._id}`}>
                                            <a className="no-underline hover:underline">
                                                <h3 className="leading-tight p-2 md:p-4" >
                                                    <b className="text-lg">{reorder_bestlap[2].name}</b><br />
                                                    Teve a <b>TERCEIRA</b> melhor volta: {reorder_bestlap[2].sixthBestLap}<br />
                                                </h3>
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* GRID DE CLASSIFICA????O - INFORMA????ES PILOTOS */}
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
                                                        {piloto.sixthBestLap}
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
    const { data: sexta_etapa } = await axios.get('http://portalnoticia-backend.herokuapp.com/lastrace/60f1c56fa59450000410aa77');
    const { data: sexta_etapaLap } = await axios.get('http://portalnoticia-backend.herokuapp.com/lastrace/60f1c56fa59450000410aa77');
    const reorder_piloto = sexta_etapa.pilot
    const reorder_equipe = sexta_etapa.team
    const reorder_bestlap = sexta_etapaLap.pilot

    reorder_piloto.sort(comparePoints);
    reorder_equipe.sort(comparePoints);
    reorder_bestlap.sort(compareLaps);

    function comparePoints(a, b) {
        if (a.sixthGpPoints > b.sixthGpPoints) {
            return -1;
        }
        if (a.sixthGpPoints > b.sixthGpPoints) {
            return 1;
        }
        if (a.sixthGpPoints > b.sixthGpPoints) {
            if (a.sixthGpFinish > b.sixthGpFinish) {
                return -1;
            }
            if (a.sixthGpFinish > b.sixthGpFinish) {
                return 1;
            }
        }
    }
    function compareLaps(a, b) {
        if (a.sixthBestLap > b.sixthBestLap) {
            return -1;
        }
        if (a.sixthBestLap > b.sixthBestLap) {
            return 1;
        }
        return 0
    }
    reorder_bestlap.reverse();

    return {
        sexta_etapa,
        reorder_piloto,
        reorder_equipe,
        reorder_bestlap
    }
}
export default Corrida;