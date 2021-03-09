import Head from 'next/head'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function Layout({
    children,
    title = 'Pilotos da Vila',
}) {
    return (
        <body>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="../../style.css" />
            </Head>
            <Navbar></Navbar>

            {children}

            <Footer
                youtube="channel/UCHzJjA6b8vBPU6zN3USXmJg"
                instagram="pilotos_da_vila"
                linkedin="felipe-lucas-643b3a140"
                github="lipeset"
            />
        </body>
    )
}