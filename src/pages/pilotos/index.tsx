import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Footer from '../../components/Footer';

export default function Piloto({ piloto }) {
    return (
        <div>
            <header className="headerContainer">
                <img src="https://unavatar.now.sh/github/omariosouto" />
                <h1>DevSoutinho's Blog</h1>
            </header>
            <section>
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
                <h3>
                    <Link href={`/`}>
                        <a>Home</a>
                    </Link>
                </h3>
            </section>
            <Footer
                facebook="omariosouto"
                twitter="omariosouto"
                linkedin="omariosouto"
                github="omariosouto"
            />
        </div>
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