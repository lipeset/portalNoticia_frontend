import Head from 'next/head'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function Layout({
    children,
    title = 'Pilotos da Vila',
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="../../style.css" />
            </Head>
            {/* <header className="headerContainer">
                <img src="https://unavatar.now.sh/github/omariosouto" />
                <h1 className="text-4xl">DevSoutinho's Blog</h1>
                <div className="bg-red-700">teste</div>
            </header> */}
            <body>
                <Navbar></Navbar>

                {children}

            </body>

            <Footer
                youtube="channel/UCHzJjA6b8vBPU6zN3USXmJg"
                instagram="pilotos_da_vila"
                linkedin="felipe-lucas-643b3a140"
                github="lipeset"
            />
        </div>
    )
}