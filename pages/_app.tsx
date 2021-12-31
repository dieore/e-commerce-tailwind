import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AppContext from '../AppContext';
import { useState } from 'react';
import { User as FirebaseUser } from "firebase/auth";
import { auth } from "../lib/firebase.config";


function MyApp({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  auth.onAuthStateChanged((user) => {
    console.log(user, "el user")
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  })

  return (
    <>
      <AppContext.Provider value={{
        openMenu,
        setOpenMenu,
        currentUser
      }}
      >
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </AppContext.Provider>
    </>
  )
}

export default MyApp;
