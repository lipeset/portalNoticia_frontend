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

// CLASSIFCAÇÃO FINALIZADA

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

const Classificacao = ({ pilotos, equipe, equipePoints }) => {
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
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <h1 className="text-center my-4 text-4xl md:text-6xl">
                        CLASSIFICAÇÃO GERAL DO CAMPEONATO
                    </h1>
                    <p className="text-center text-xl md:text-3xl my-4">
                        Para alterar entre PILOTOS e EQUIPES baste selecionar nos botões abaixo
                    </p>

                    <ThemeProvider theme={theme}>
                        <AppBar position="relative" color="primary">
                            <Tabs value={value} onChange={handleChange} centered>
                                <Tab label="PILOTOS" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(0)} />
                                <Tab label="EQUIPES" className="classA p-3 mr-5 hover:text-red-500" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                    </ThemeProvider>

                    {/* CLASSIFICAÇÃO DE PILOTOS */}
                    <TabPanel value={value} index={0}>
                        <h1 className="text-center text-4xl my-4">NOSSO TOP 3</h1>
                        <div className="md:grid grid-cols-3 items-center">
                            {pilotos.slice(0, 3).map((pilots, index) => (
                                <div key={pilots.pilot._id} className="px-4 md:px-12">
                                    <article className="overflow-hidden rounded-lg shadow-lg border-black border-t-2 border-r-2 rounded-r-3xl px-2 my-1 md:my-2">
                                        <header className="p-2">
                                            <div className="grid grid-rows-2">
                                                <Link href={`/pilotos/${pilots.pilot._id}`}>
                                                    <a className="classA hover:underline">
                                                        <h1 className="text-2xl font-bold">
                                                            {pilots.pilot.name}
                                                        </h1>
                                                    </a>
                                                </Link>
                                                <Link href={`/equipes/${pilots.pilot.team}`}>
                                                    <a className="classA hover:underline">
                                                        <h1 className="text-2xl">
                                                            {matchName(pilots.pilot.team)}
                                                        </h1>
                                                    </a>
                                                </Link>
                                                <h1 className="text-3xl font-bold">{index + 1}º com {pilots.punctuation} pts</h1>
                                            </div>
                                        </header>
                                        <img className="rounded-3xl w-full" src={pilots.pilot.gridUrl} />
                                    </article>
                                </div>
                            ))}
                        </div>
                        <h1 className="text-center text-4xl my-4">O RESTANTE DO GRID</h1>
                        <div className="md:grid grid-cols-4 items-center">
                            {pilotos.slice(3).map((pilots, index) => (
                                <div key={pilots.pilot._id} className="px-4 md:px-12">
                                    <article className="overflow-hidden rounded-lg shadow-lg border-black border-t-2 border-r-2 rounded-r-3xl px-2 my-1 md:my-2">
                                        <header className="p-2">
                                            <div className="grid grid-rows-2">
                                                <Link href={`/pilotos/${pilots.pilot._id}`}>
                                                    <a className="classA hover:underline">
                                                        <h1 className="text-2xl font-bold">
                                                            {pilots.pilot.name}
                                                        </h1>
                                                    </a>
                                                </Link>
                                                <Link href={`/equipes/${pilots.pilot.team}`}>
                                                    <a className="classA hover:underline">
                                                        <h1 className="text-2xl">
                                                            {matchName(pilots.pilot.team)}
                                                        </h1>
                                                    </a>
                                                </Link>
                                                <h1 className="text-3xl font-bold">{index + 4}º com {pilots.punctuation} pts</h1>
                                            </div>
                                        </header>
                                        <img className="rounded-3xl w-full" src={pilots.pilot.profileUrl} />
                                    </article>
                                </div>
                            ))}
                        </div>
                    </TabPanel>

                    {/* CLASSIFICAÇÃO DE EQUIPES */}
                    <TabPanel value={value} index={1}>
                        <h1 className="text-center text-4xl my-4">NOSSO TOP 3</h1>
                        <div className="md:grid grid-cols-3 items-center">
                            {equipePoints.slice(0, 3).map((equipe, index) => (
                                <div key={equipe.team._id} className="px-4 md:px-12">
                                    <article className="overflow-hidden rounded-lg shadow-lg border-black border-t-2 border-r-2 rounded-r-3xl px-2 my-1 md:my-2">
                                        <Link href={`/equipes/${equipe.team._id}`}>
                                            <a className="hover:underline">
                                                <header className="p-2">
                                                    <div className="grid grid-rows-2">
                                                        <h1 className="text-4xl font-bold">
                                                            {equipe.team.alias}
                                                        </h1>
                                                        <h1 className="text-3xl font-bold">{index + 1}º com {equipe.punctuation} pts</h1>
                                                    </div>
                                                </header>
                                                <img className="rounded-3xl w-full" src={equipe.team.gridUrl} />
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            ))}
                        </div>
                        <h1 className="text-center text-4xl my-4">O RESTANTE DO GRID</h1>
                        <div className="md:grid grid-cols-3 items-center">
                            {equipePoints.slice(3).map((equipe, index) => (
                                <div key={equipe.team._id} className="px-4 md:px-12">
                                    <article className="overflow-hidden rounded-lg shadow-lg border-black border-t-2 border-r-2 rounded-r-3xl px-2 my-1 md:my-2">
                                        <Link href={`/equipes/${equipe.team._id}`}>
                                            <a className="hover:underline">
                                                <header className="p-2">
                                                    <div className="grid grid-rows-2">
                                                        <h1 className="text-4xl font-bold">
                                                            {equipe.team.alias}
                                                        </h1>
                                                        <h1 className="text-3xl font-bold">{index + 4}º com {equipe.punctuation} pts</h1>
                                                    </div>
                                                </header>
                                                <img className="rounded-3xl w-full" src={equipe.team.gridUrl} />
                                            </a>
                                        </Link>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                </div>
            </div>
        </Layout>
    )
}
Classificacao.getInitialProps = async () => {
    const { data: pilotos } = await axios.get('https://portalnoticia-backend.herokuapp.com/pilotclassification');
    const { data: equipe } = await axios.get('https://portalnoticia-backend.herokuapp.com/teams');
    const { data: equipePoints } = await axios.get('https://portalnoticia-backend.herokuapp.com/teamclassification');

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
    pilotos.sort(compare);
    equipePoints.sort(compare);

    return {
        pilotos,
        equipe,
        equipePoints
    }
}
export default Classificacao;