import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

export default function Member({ user }) {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.createdAt}</p>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`http://localhost:3001/pilots`);
    const data = await response.json();

    const paths = data.map(pilot => {
        return { params: { name: pilot._id } }
    });

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { _id } = context.params;

    const response = await fetch(`http://localhost:3001/pilots/${_id}`);
    const data = await response.json();

    return {
        props: {
            user: data,
        },
        revalidate: 10,
    }
}