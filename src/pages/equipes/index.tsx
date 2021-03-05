import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

export default function Equipe({ equipes }) {
    return (
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
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('http://localhost:3001/teams');
    const data = await response.json();

    return {
        props: {
            equipes: data,
        },
        revalidate: 1000
    }
};