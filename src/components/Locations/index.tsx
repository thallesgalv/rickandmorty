import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { CardGrid } from '../Card/styles'
import Card from '../Card'
import Load from '../Load'
import NotFound from '../NotFound'
import Controls from '../Controls'
import Filters from '../Filters'

const Locations: React.FC = () => {
  const { request, data, loading } = useFetch()

  const [nameFilter, setNameFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [dimensionFilter, setDimensionFilter] = useState('')

  useEffect(() => {
    request(
      `https://rickandmortyapi.com/api/location/?name=${nameFilter}&type=${typeFilter}&dimension=${dimensionFilter}`
    )
  }, [request, nameFilter, typeFilter, dimensionFilter])

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
          Tipo:
          <input
            type="text"
            value={typeFilter}
            onChange={({ target }) => setTypeFilter(target.value)}
          />
        </label>
        <label>
          Dimensão:
          <input
            type="text"
            value={dimensionFilter}
            onChange={({ target }) => setDimensionFilter(target.value)}
          />
        </label>
      </Filters>

      <CardGrid>
        {data &&
          data.results.map(({ id, name, type, dimension }) => (
            <Card
              style="location"
              key={id}
              name={name}
              type={type}
              dimension={dimension}
            />
          ))}
      </CardGrid>
      {loading && <Load />}
      {!data && !loading && <NotFound />}
      {data && <Controls data={data} request={request} />}
    </section>
  )
}

export default Locations
