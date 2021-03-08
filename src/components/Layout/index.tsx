import Head from 'next/head'
import Footer from '../../components/Footer'

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
            </Head>
            <header className="headerContainer">
                <img src="https://unavatar.now.sh/github/omariosouto" />
                <h1>DevSoutinho's Blog</h1>
            </header>
            <body>

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