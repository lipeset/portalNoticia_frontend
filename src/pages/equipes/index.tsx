import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout'

export default function Equipe({ equipes }) {
    return (
        <Layout>
            <div>
                <section>
                    <ul>
                        {equipes.map((teams) => (
                            <li key={teams._id}>
                                <Link href={`/equipes/${teams._id}`}>
                                    <a>
                                        {teams.fullName}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h3>
                        <Link href={`/`}>
                            <a>Home</a>
                        </Link>
                    </h3>
                </section>
            </div >
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://portalnoticia-backend.herokuapp.com/teams');
    const data = await response.json();

    return {
        props: {
            equipes: data,
        },
        revalidate: 1000
    }
};