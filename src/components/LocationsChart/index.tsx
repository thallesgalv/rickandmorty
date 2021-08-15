import React, { useEffect, useState } from 'react'
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

import useFetch from '../../hooks/useFetch'
import { StyledContainer } from './styles'

interface ChartShapeData {
  name: string
  residents: number
}
interface pageDimensions {
  width: number
  height: number
}

const LocationsChart: React.FC = () => {
  const { request, data } = useFetch()
  const [numberOfLocation, setNumberOfLocation] = useState('')
  const [chartShapeData, setchartShapeData] = useState<ChartShapeData[]>([])
  const [pageDimensions, setPageDimensions] = useState<pageDimensions>(null)

  useEffect(() => {
    request(`https://rickandmortyapi.com/api/location/${numberOfLocation}`)
  }, [request, numberOfLocation])

  useEffect(() => {
    if (data) {
      const totalLocation = [...new Array(data.info?.count)]
        .fill(1)
        .map((i, idx) => i + idx)
        .join(',')
      if (totalLocation !== '1') setNumberOfLocation(totalLocation)
    }
  }, [data])

  useEffect(() => {
    const arr = []

    for (let i = 0; i < data?.length; i++) {
      arr.push({
        name: data[i].name,
        residents: data[i].residents.length
      })
    }
    arr.sort((a, b) => {
      if (a.residents < b.residents) return 1
      if (a.residents > b.residents) return -1
      return 0
    })
    setchartShapeData(arr)
  }, [data])

  useEffect(() => {
    function getPageDimmensions() {
      setPageDimensions({
        width: window.innerWidth * 0.6,
        height: window.innerHeight * 11
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
      <ComposedChart
        layout="vertical"
        data={chartShapeData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 100
        }}
        width={pageDimensions?.width}
        height={pageDimensions?.height}
        className="locationChart"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          style={{
            fontSize: '1rem',
            fontFamily: 'var(--fontBody)',
            width: '100%'
          }}
          tick={{ fill: 'var(--colorText)' }}
          tickSize={16}
        />
        <YAxis
          dataKey="name"
          type="category"
          scale="band"
          width={40}
          style={{
            fontSize: '1rem',
            fontFamily: 'var(--fontBody)',
            width: '100%'
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
        <Bar dataKey="residents" fill="var(--colorPrimary)" barSize={30} />
      </ComposedChart>
    </StyledContainer>
  )
}

export default LocationsChart
