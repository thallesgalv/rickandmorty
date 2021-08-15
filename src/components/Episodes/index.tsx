import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { CardGrid } from '../Card/styles'
import Card from '../Card'
import Load from '../Load'
import NotFound from '../NotFound'
import Controls from '../Controls'
import Filters from '../Filters'

const Episodes: React.FC = () => {
  const { request, data, loading } = useFetch()

  const [nameFilter, setNameFilter] = useState('')
  const [episodeFilter, setEpisodeFilter] = useState('')

  useEffect(() => {
    request(
      `https://rickandmortyapi.com/api/episode/?name=${nameFilter}&episode=${episodeFilter}`
    )
  }, [request, nameFilter, episodeFilter])

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
            value={episodeFilter}
            onChange={({ target }) => setEpisodeFilter(target.value)}
          />
        </label>
      </Filters>

      <CardGrid>
        {data &&
          data.results.map(props => (
            <Card
              style="episode"
              key={props.id}
              name={props.name}
              episode={props.episode}
              airDate={props.air_date}
            />
          ))}
      </CardGrid>
      {loading && <Load />}
      {!data && !loading && <NotFound />}
      {data && <Controls data={data} request={request} />}
    </section>
  )
}

export default Episodes
