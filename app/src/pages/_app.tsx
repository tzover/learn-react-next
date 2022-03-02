import Head from 'next/head'
import { AppProps } from 'next/app'

// styling
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>NextJS Practices</title>
        <meta
          name='description'
          content='NextJS sample project for practices'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
