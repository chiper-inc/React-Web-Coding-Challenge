import '../styles/globals.css'
import Nav from '../components/Nav'
import { Provider } from 'react-redux'
import store from '../store'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
