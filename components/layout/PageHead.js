import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Transp - Transport Courier Logistics HTML Template"}
                </title>
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
        </>
    )
}

export default PageHead