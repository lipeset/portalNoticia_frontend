import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout'

export default function Noticia({ noticias }) {
    return (
        <Layout>
            <div>
                <ul>
                    {noticias.map((news) => (
                        <li key={news._id}>
                            <Link href={`/noticias/${news._id}`}>
                                <a><h3>
                                    {news.title}
                                </h3></a>
                            </Link>
                            <p>
                                {news.abstract}
                            </p>
                        </li>
                    ))}
                </ul>
                <h3>
                    <Link href={`/`}>
                        <button><a>Home</a></button>
                    </Link>
                </h3>
            </div>
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://portalnoticia-backend.herokuapp.com/news');
    const data = await response.json();

    return {
        props: {
            noticias: data,
        },
        revalidate: 100
    }
};