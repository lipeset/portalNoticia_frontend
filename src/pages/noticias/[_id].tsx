import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function Noticia({ noticia }) {
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
                <h1>Título: {noticia.title}</h1>
                <h3>Conteúdo: {noticia.newsContent}</h3>
                <h3>Autor: {noticia.author}</h3>
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
    const response = await fetch(`http://localhost:3001/news`);
    const data = await response.json();

    const paths = data.map(news => {
        return { params: { _id: news._id } }
    });

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (context) => { //FIND A PILOT BY ID
    const { _id } = context.params;
    const response = await fetch(`http://localhost:3001/news/${_id}`);
    const data = await response.json();

    return {
        props: {
            noticia: data,
        },
        revalidate: 1000,
    }
}