import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Backtop from '../components/Backtop'
import Locations from '../components/Locations'
import Title from '../components/Title'
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty | Localizações</title>
      </Head>

      <Header />
      <Title big text="Localizações" />
      <main>
        <Locations />
      </main>
      <Footer />
      <Backtop />
    </>
  )
}
export default Home
