import Head from 'next/head'
import { useMoralis } from 'react-moralis'

import baseStyles from '../styles/base.module.css'

import Login from '../components/Login'
import Nav from '../components/Nav'
import Header from '../components/auth/Header'
import Main from '../components/auth/Main'
import Footer from '../components/auth/Footer'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated)
    return (
      <>
        <Nav />
        <Login />
      </>
    )
  return (
    <>
      <Head>
        <title>MetaChat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Header />
      <Main />
      <Footer />
      {/* <div className={baseStyles.container}><Messages /></div> */}
    </>
  )
}
