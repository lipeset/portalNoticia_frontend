import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

export default function Piloto({ piloto }) {
    return (
        <ul>
            {piloto.map((pilots) => (
                <li key={pilots._id}>
                    <Link href={`/pilotos/${pilots._id}`}>
                        <a>
                            {pilots.name}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('http://localhost:3001/pilots');
    const data = await response.json();

    return {
        props: {
            piloto: data,
        },
        revalidate: 1000
    }
};