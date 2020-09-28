import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import NavBar from '../components/NavBar'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8"/>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
          <meta content="width=device-width, initial-scale=1" name="viewport"/>
          <link rel="shortcut icon" href="/img/favicons/apple-touch-icon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png"/>
          <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#00aba9"/>
          <meta name="theme-color" content="#faf9f9"/>
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Next with Swapi" />
        </Head>
        <GlobalStyles />
        <NavBar />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
