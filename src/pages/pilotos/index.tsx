import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

export default function Piloto({ piloto }) {
    return (
        <Layout>
            <div>
                <ul>
                    {piloto.map((pilots) => (
                        <li key={pilots._id}>
                            <Link href={`/pilotos/${pilots._id}`}>
                                <a><h3>
                                    {pilots.name}
                                </h3></a>
                            </Link>
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
    const response = await fetch('https://portalnoticia-backend.herokuapp.com/pilots');
    const data = await response.json();

    return {
        props: {
            piloto: data,
        },
        revalidate: 1000
    }
};