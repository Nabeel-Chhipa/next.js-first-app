// import { Layout } from '../components/Layout'
// import { Header } from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
    // <Layout>
      {/* <Header /> */}
      // <Component {...pageProps} />
    {/* </Layout> */}
  
}

export default MyApp
