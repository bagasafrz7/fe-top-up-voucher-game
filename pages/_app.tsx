import '../styles/utilities.css'
import '../styles/homepage.css'
import '../styles/detail.css'
import '../styles/checkout.css'
import '../styles/complete-checkout.css'
import '../styles/sign-in.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Bootstrap CSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" 
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        
        {/* AOS Animation */}
        <link rel="stylesheet"  href="https://unpkg.com/aos@2.3.1/dist/aos.css"/>
      </Head>

        {/* Call Bootstrap JS */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous" />
      <Component {...pageProps} />
    </>
  )
}
