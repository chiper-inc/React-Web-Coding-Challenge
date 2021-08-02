import '../styles/globals.css'
import Nav from '../components/Nav'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../store'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <Head>
        <link rel="shortcut icon" href="/img/logo.png" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
