import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function Piloto({ piloto }) {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <header className="headerContainer">
                <img src="https://unavatar.now.sh/github/omariosouto" />
                <h1>DevSoutinho's Blog</h1>
            </header>
            <section>
                <h1>Nome: {piloto.name}</h1>
                <p>Podiuns: {piloto.podiuns}</p>
                <p>Maior colocação numa corrida: {piloto.highRaceFinish}</p>
                <p>Maior colocação no podium: {piloto.highGridPosition}</p>
                <p>Pole positions:{piloto.polePosition}</p>
                <p>Voltas rápidas: {piloto.fastLaps}</p>
                <p>Peso: {piloto.weight}</p>
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

export const getStaticPaths: GetStaticPaths = async () => { //READ AND PREPARE ALL PILOTS
    const response = await fetch(`http://localhost:3001/pilots`);
    const data = await response.json();

    const paths = data.map(pilots => {
        return { params: { _id: pilots._id } }
    });

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (context) => { //FIND A PILOT BY ID
    const { _id } = context.params;

    const response = await fetch(`http://localhost:3001/pilots/${_id}`);
    const data = await response.json();

    return {
        props: {
            piloto: data,
        },
        revalidate: 1000,
    }
}