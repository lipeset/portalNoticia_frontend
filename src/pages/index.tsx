import axios from 'axios';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

const Noticia = ({ props }) => (
    <div>
        <div>
            <h1>endpoint news</h1>
            <ul>
                {props.noticias.map(news => (
                    <li key={news._id}>
                        <h1>{news.title}</h1>
                        <h3>Resumo: {news.abstract}</h3>
                        <Link href={`/noticias/${news._id}`}>
                            <a>Saiba mais...</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h1>endpoint pilots</h1>
            <ul>
                {props.pilotos.map(pilots => (
                    <li key={pilots._id}>
                        <h1>{pilots.name}</h1>
                        <Link href={`/pilotos/${pilots._id}`}>
                            <a>Saiba mais...</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h1>endpoint teams</h1>
            <ul>
                {props.equipes.map(teams => (
                    <li key={teams._id}>
                        <h1>{teams.fullName}</h1>
                        <Link href={`/equipes/${teams._id}`}>
                            <a>Saiba mais...</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
Noticia.getInitialProps = async () => {
    const newsResponse = await axios.get('http://localhost:3001/news');
    const pilotsResponse = await axios.get('http://localhost:3001/pilots');
    const teamsResponse = await axios.get('http://localhost:3001/teams');
    return {
        props: {
            noticias: newsResponse.data,
            pilotos: pilotsResponse.data,
            equipes: teamsResponse.data,
        }
    }
}
export default Noticia;