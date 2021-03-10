import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout'

export default function Equipe({ equipes }) {
    return (
        <Layout>
            <div>
                <ul>
                    {equipes.map((teams) => (
                        <li key={teams._id}>
                            <Link href={`/equipes/${teams._id}`}>
                                <a><h3>
                                    {teams.fullName}
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
        </Layout >
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://portalnoticia-backend.herokuapp.com/teams');
    const data = await response.json();

    return {
        props: {
            equipes: data,
        },
        revalidate: 10
    }
};