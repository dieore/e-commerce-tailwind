import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Slider images={["https://http2.mlstatic.com/D_NQ_749672-MLA48390149013_112021-OO.webp",
        "https://http2.mlstatic.com/D_NQ_808146-MLA48432871146_122021-OO.webp",
        "https://http2.mlstatic.com/D_NQ_884579-MLA48382963371_112021-OO.webp"]} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;
