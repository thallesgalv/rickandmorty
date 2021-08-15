import React from 'react'
import Head from 'next/head'
import Characters from '../components/Characters'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Backtop from '../components/Backtop'
import Title from '../components/Title'
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>

      <Header />
      <main>
        <Title big text="Personagens" />
        <Characters />
      </main>
      <Footer />
      <Backtop />
    </>
  )
}
export default Home
