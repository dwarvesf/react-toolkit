import { ChakraProvider } from '@chakra-ui/react'
import FontFace from 'components/font-face'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import theme from 'theme'
import { getSeo } from 'utils/seo'

const App = ({ Component, pageProps }) => {
  const seo = getSeo()
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon"></link>
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <meta name="theme-color" content="#E13F5E" />
      </Head>
      <DefaultSeo {...seo} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <FontFace />
    </>
  )
}

export default App
