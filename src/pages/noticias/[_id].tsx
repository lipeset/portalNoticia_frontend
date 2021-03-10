import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Noticia({ noticia }) {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Carregando...</p>;
    }

    return (
        <Layout>
            <div>
                <h1>Título: {noticia.title}</h1>
                <h3>Conteúdo: {noticia.newsContent}</h3>
                <h3>Autor: {noticia.author}</h3>
                <h3>
                    <Link href={`/`}>
                        <button><a>Home</a></button>
                    </Link>
                    <Link href={`/noticias`}>
                        <button><a>Todas as notícias</a></button>
                    </Link>
                </h3>
            </div>
        </Layout>
    )
}
export const getStaticPaths: GetStaticPaths = async () => { //READ AND PREPARE ALL PILOTS
    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/news`);
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
    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/news/${_id}`);
    const data = await response.json();

    return {
        props: {
            noticia: data,
        },
        revalidate: 1000,
    }
}