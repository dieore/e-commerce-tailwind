import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Slider images={["https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g",
        "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
        "https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs"]} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;
