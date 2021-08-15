import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Backtop from '../components/Backtop'
import Episodes from '../components/Episodes'
import Title from '../components/Title'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty | Episódios</title>
      </Head>

      <Header />
      <main>
        <Title big text="Episódios" />
        <Episodes />
      </main>
      <Footer />
      <Backtop />
    </>
  )
}
export default Home
