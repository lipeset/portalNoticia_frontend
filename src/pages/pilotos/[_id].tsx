import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Piloto({ piloto }) {
    const { isFallback } = useRouter();
    if (isFallback) {
        return <p>Carregando...</p>;
    }

    return (
        <Layout>

            <div className="container my-6 mx-auto px-4 md:px-12 md:grid grid-cols-1 grid-flow-col -mt-2">
                {/*NOTÍCIA PRINCIPAL*/}
                <div className="container my-6 mx-auto md:px-12 border-red-500 border-t-8 border-r-8 rounded-r-3xl">
                    <div className="flex flex-wrap -mx-1 lg:-mx-10">
                        <div key={piloto._id} className="my-1 px-1 w-full lg:my-4 lg:px-4">
                            <article className="transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg">
                                <Link href={`/noticias/${piloto._id}`}>
                                    <a className="no-underline hover:text-red-500 text-black">
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="classA text-2xl">
                                                {piloto.title}
                                            </h1>
                                        </header>
                                        <img key={piloto._id} className="flex flex-none" src={piloto.profileUrl} />
                                    </a>
                                </Link>
                                <h3 className="flex items-center justify-between leading-tight p-2 md:p-4" >
                                    {piloto.abstract}
                                </h3>
                                <footer className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <Link href={`/pilotos/${piloto._id}`}>
                                        <a className="classA flex items-center no-underline hover:text-red-500 hover:underline">
                                            <p>Autor: {piloto.name}<br /></p>
                                        </a>
                                    </Link>
                                </footer>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
export const getStaticPaths: GetStaticPaths = async () => { //READ AND PREPARE ALL PILOTS
    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/pilots`);
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

    const response = await fetch(`https://portalnoticia-backend.herokuapp.com/pilots/${_id}`);
    const data = await response.json();

    return {
        props: {
            piloto: data,
        },
        revalidate: 1000,
    }
}