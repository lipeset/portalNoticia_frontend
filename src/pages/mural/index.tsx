import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

export default function Piloto({ piloto }) {
    return (
        <Layout>
            <div>
                <h1>MURAL FUNCIONANDO</h1>
            </div>
        </Layout>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://portalnoticia-backend.herokuapp.com/pilots');
    const data = await response.json();

    return {
        props: {
            piloto: data,
        },
        revalidate: 1000
    }
};