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
                facebook="omariosouto"
                twitter="omariosouto"
                linkedin="omariosouto"
                github="omariosouto"
            />
        </div>
    )
}