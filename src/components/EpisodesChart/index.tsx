import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

import useFetch from '../../hooks/useFetch'
import { StyledContainer } from './styles'

interface ChartShapeData {
  name: string
  frequency: number
}

interface pageDimensions {
  width: number
  height: number
}

const EpisodesChart: React.FC = () => {
  const { request, data } = useFetch()
  const [numberOfEpisodes, setnumberOfEpisodes] = useState('')
  const [chartShapeData, setchartShapeData] = useState<ChartShapeData[]>([])
  const [pageDimensions, setPageDimensions] = useState<pageDimensions>(null)

  useEffect(() => {
    request(`https://rickandmortyapi.com/api/episode/${numberOfEpisodes}`)
  }, [request, numberOfEpisodes])

  useEffect(() => {
    if (data) {
      const totalEpisodes = [...new Array(data.info?.count)]
        .fill(1)
        .map((i, idx) => i + idx)
        .join(',')
      if (totalEpisodes !== '1') setnumberOfEpisodes(totalEpisodes)
    }
  }, [data])

  useEffect(() => {
    if (data && data[0]) {
      data.map(
        i =>
          (i.season = i.episode.slice(
            i.episode.indexOf('S'),
            i.episode.indexOf('E')
          ))
      )

      const uniques: string[] = Array.from(new Set(data.map(i => i.season)))

      const arr = []

      for (let un = 0; un < uniques.length; un++) {
        arr.push({
          name: uniques[un],
          frequency: data.filter(i => i.season === uniques[un]).length
        })
      }

      setchartShapeData(arr)
    }
  }, [data])

  useEffect(() => {
    function getPageDimmensions() {
      setPageDimensions({
        width: window.innerWidth * 0.6,
        height: window.innerHeight / 4
      })
    }
    getPageDimmensions()

    window.addEventListener('resize', getPageDimmensions)

    return () => {
      window.removeEventListener('resize', getPageDimmensions)
    }
  }, [])

  return (
    <StyledContainer>
      <BarChart
        width={pageDimensions?.width}
        height={pageDimensions?.height}
        data={chartShapeData}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5
        }}
        barSize={30}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 10, right: 10 }}
          className="episodesChart__xAxis"
          style={{
            fontSize: '1rem',
            fontFamily: 'var(--fontBody)'
          }}
          tick={{ fill: 'var(--colorText)' }}
          tickSize={16}
        />
        <YAxis
          style={{
            fontSize: '1rem',
            fontFamily: 'var(--fontBody)'
          }}
          tick={{ fill: 'var(--colorText)' }}
          tickSize={16}
        />
        <Tooltip
          contentStyle={{
            background: 'rgba(23,23,23,0.8)',
            width: 'fit-content',
            fontFamily: 'var(--fontBody)'
          }}
          itemStyle={{
            display: 'flex',
            gap: '5px',
            textTransform: 'capitalize'
          }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="frequency" fill="var(--colorPrimary)" />
      </BarChart>
    </StyledContainer>
  )
}

export default EpisodesChart
