import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress options={{showSpinner: false}} color="#9ab7e6"/>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
