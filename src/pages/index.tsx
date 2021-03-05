import { GetStaticProps } from "next";

export default function Home({ org }) {
    return (
        <div>
            <h1>{org.fullName}</h1>
            <h3>{org.teamPolePositions}</h3>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('hhttp://localhost:3001/teams');
    const data = await response.json();

    return {
        props: {
            org: data,
        },
        revalidate: 10
    }
};