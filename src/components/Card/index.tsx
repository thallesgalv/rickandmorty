import React from 'react'
import { ContainerImg, StatusCircle, StyledCard } from './styles'
import { MdPlace } from 'react-icons/md'
import { IoMdPlanet, IoIosCalendar } from 'react-icons/io'
import Tilt from 'react-tilt'

type CardProps = {
  style: 'character' | 'location' | 'episode'
  key: number
  name: string
  gender?: string
  origin?: string
  location?: string
  status?: string
  episodeCount?: string[]
  species?: string
  image?: string
  type?: string
  dimension?: string
  episode?: string
  airDate?: string
}

const Card: React.FC<CardProps> = ({
  style,
  name,
  gender,
  origin,
  location,
  status,
  episodeCount,
  species,
  image,
  type,
  dimension,
  episode,
  airDate
}) => {
  return (
    <StyledCard>
      {name && <h1>{name}</h1>}
      {style === 'character' && (
        <>
          <p>
            {species} - {gender} - {status}
            {status === 'Alive' && (
              <StatusCircle style={{ background: 'green' }} />
            )}
            {status === 'Dead' && (
              <StatusCircle style={{ background: 'red' }} />
            )}
          </p>
          <p>
            <IoMdPlanet />
            {'  '}
            {origin}
          </p>
          <p>
            <MdPlace />
            {'  '}
            {location}
          </p>
          <p>Total de aparições: {episodeCount}</p>
          <ContainerImg>
            <Tilt className="Tilt" options={{ reverse: true }}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient">
                    <stop offset="0%" stopColor="#24A148" />
                    <stop offset="100%" stopColor="#1C8039" />
                  </linearGradient>
                </defs>
                <path
                  d="M41.5,-43C54.5,-28.4,66.4,-14.2,67.1,0.7C67.8,15.6,57.4,31.3,44.3,42.3C31.3,53.4,15.6,59.8,-0.3,60.1C-16.2,60.4,-32.4,54.5,-37.4,43.4C-42.5,32.4,-36.4,16.2,-34.8,1.6C-33.2,-13,-36,-25.9,-31,-40.5C-25.9,-55.1,-13,-71.2,0.6,-71.8C14.2,-72.5,28.4,-57.6,41.5,-43Z"
                  transform="translate(100 100)"
                />
              </svg>
              <img src={image} alt={name} />
            </Tilt>
          </ContainerImg>
        </>
      )}
      {style === 'location' && (
        <>
          <p>
            <IoMdPlanet />
            {'  '}
            {type}
          </p>
          <p>
            <MdPlace />
            {'  '}
            {dimension}
          </p>
        </>
      )}
      {style === 'episode' && (
        <>
          <p>{episode}</p>
          <p>
            <IoIosCalendar />
            {'  '}
            {airDate}
          </p>
        </>
      )}
    </StyledCard>
  )
}

export default Card
