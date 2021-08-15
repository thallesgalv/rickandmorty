import React from 'react'
import Head from 'next/head'
import EpisodesChart from '../components/EpisodesChart'
import Header from '../components/Header'
import LocationsChart from '../components/LocationsChart'
import Title from '../components/Title'
import Backtop from '../components/Backtop'
import Footer from '../components/Footer'

const Charts: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty | Gráficos</title>
      </Head>
      <Header />
      <main>
        <Title big text="Gráficos" />
        <Title text="Total de episódios por temporada" />
        <EpisodesChart />
        <Title text="Total de personagens por planeta" />
        <LocationsChart />
      </main>
      <Footer />
      <Backtop />
    </>
  )
}

export default Charts
