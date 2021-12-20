import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AppContext from '../AppContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <AppContext.Provider value={{
        openMenu,
        setOpenMenu
      }}
      >
        <Nav />
        <Component {...pageProps}  />
        <Footer />
      </AppContext.Provider>
    </>
  )
}

export default MyApp;
