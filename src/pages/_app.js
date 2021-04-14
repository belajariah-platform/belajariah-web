// pages/_app.js
// import { Header } from '../components'
import '../assets/css/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    // <Header>
    <Component {...pageProps} />
    // </Header>
  )
}