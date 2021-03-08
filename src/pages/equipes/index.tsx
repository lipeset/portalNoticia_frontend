import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Footer from '../../components/Footer'

export default function Equipe({ equipes }) {
    return (
        <div>
            <header className="headerContainer">
                <img src="https://unavatar.now.sh/github/omariosouto" />
                <h1>DevSoutinho's Blog</h1>
            </header>
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
            <Footer
                facebook="omariosouto"
                twitter="omariosouto"
                linkedin="omariosouto"
                github="omariosouto"
            />
        </div >
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