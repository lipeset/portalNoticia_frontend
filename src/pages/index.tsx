import axios from 'axios';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

const Noticia = ({ noticias }) => (
    <div>
        <h1>Pilotos</h1>
        <ul>
            {noticias.map(news => (
                <li key={news._id}>
                    <h1>{news.title}</h1>
                    <h3>{news.abstract}</h3>
                    <Link href={`/noticias/${news._id}`}>
                        <a>Saiba mais...</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

Noticia.getInitialProps = async () => {
    const response = await axios.get('http://localhost:3001/news');
    return { noticias: response.data }
}

export default Noticia;

// export default function Piloto({ piloto }) {
//     return (
//         <ul>
//             {piloto.map((pilots) => (
//                 <li key={pilots._id}>
                    // <Link href={`/pilotos/${pilots._id}`}>
                    //     <a>
                    //         {pilots.name}
                    //     </a>
                    // </Link>
//                 </li>
//             ))}
//         </ul>
//     )
// }

// export const getStaticProps: GetStaticProps = async () => {
//     const response = await fetch('http://localhost:3001/pilots');
//     const data = await response.json();

//     return {
//         props: {
//             piloto: data,
//         },
//         revalidate: 10
//     }
// };