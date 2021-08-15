import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { CardGrid } from '../Card/styles'
import Card from '../Card'
import NotFound from '../NotFound'
import Load from '../Load'
import Controls from '../Controls'
import Filters from '../Filters'

const Characters: React.FC = () => {
  const { request, data, loading } = useFetch()

  const [nameFilter, setNameFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [speciesFilter, setSpeciesFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [genderFilter, setGenderFilter] = useState('')

  useEffect(() => {
    request(
      `https://rickandmortyapi.com/api/character/?name=${nameFilter}&status=${statusFilter}&species=${speciesFilter}&type=${typeFilter}&gender=${genderFilter}`
    )
  }, [
    request,
    nameFilter,
    statusFilter,
    speciesFilter,
    typeFilter,
    genderFilter
  ])
  return (
    <section>
      <Filters>
        <label>
          Nome:
          <input
            type="text"
            value={nameFilter}
            onChange={({ target }) => setNameFilter(target.value)}
          />
        </label>
        <label>
          Status
          <select
            value={statusFilter}
            onChange={({ target }) => setStatusFilter(target.value)}
          >
            <option></option>
            <option>Alive</option>
            <option>Dead</option>
            <option>unknow</option>
          </select>
        </label>
        <label>
          Espécie:
          <input
            type="text"
            value={speciesFilter}
            onChange={({ target }) => setSpeciesFilter(target.value)}
          />
        </label>
        <label>
          Tipo:
          <input
            type="text"
            value={typeFilter}
            onChange={({ target }) => setTypeFilter(target.value)}
          />
        </label>
        <label>
          Gênero:
          <select
            value={genderFilter}
            onChange={({ target }) => setGenderFilter(target.value)}
          >
            <option></option>
            <option>female</option>
            <option>male</option>
            <option>genderless</option>
            <option>unknown</option>
          </select>
        </label>
      </Filters>

      <CardGrid>
        {data &&
          data.results.map(
            ({
              id,
              name,
              gender,
              origin,
              location,
              status,
              episode,
              species,
              image
            }) => (
              <Card
                style="character"
                key={id}
                name={name}
                gender={gender}
                origin={origin.name}
                location={location.name}
                status={status}
                episodeCount={episode.length}
                species={species}
                image={image}
              />
            )
          )}
      </CardGrid>
      {loading && <Load />}
      {!data && !loading && <NotFound />}
      {data && <Controls data={data} request={request} />}
    </section>
  )
}

export default Characters
