import React, { useEffect, useState } from 'react'
import { Pagination, StyledControls } from './styles'
import Tilt from 'react-tilt'

type ControlsProps = {
  data: any
  request: (arg: string) => Promise<void>
}

const Controls: React.FC<ControlsProps> = ({ data, request }) => {
  const [pagination, setPagination] = useState([])
  const [numberOfPages, setNumberOfPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)

  useEffect(() => {
    data &&
      (data.info.pages
        ? setNumberOfPages(data.info.pages)
        : setNumberOfPages(0))

    if (data?.info.next) {
      const urlOfNext = data.info.next

      setCurrentPage(
        urlOfNext.includes('&')
          ? +urlOfNext.substring(
              urlOfNext.search('page=') + 5,
              urlOfNext.indexOf('&')
            ) - 1
          : +urlOfNext.substring(urlOfNext.indexOf('=') + 1, urlOfNext.length) -
              1
      )
    } else {
      setCurrentPage(data?.info.pages)
    }
  }, [data])

  useEffect(() => {
    setPagination(new Array(numberOfPages).fill(1).map((i, idx) => i + idx))
  }, [numberOfPages, currentPage])

  function scrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  function handleFetchNextPage() {
    scrollTop()
    request(data.info.next)
  }

  function handleFetchPrevPage() {
    scrollTop()
    request(data.info.prev)
  }

  function handleClick({ target }) {
    scrollTop()
    if (data.info.next) {
      request(data.info.next.replace(currentPage + 1, +target.innerHTML))
    }

    if (data.info.prev) {
      request(data.info.prev.replace(currentPage - 1, +target.innerHTML))
    }
  }
  return (
    <>
      <StyledControls>
        <li>
          {data?.info.prev && (
            <Tilt>
              <button onClick={handleFetchPrevPage}>Anterior</button>
            </Tilt>
          )}
        </li>
        <li>
          {data?.info.next && (
            <Tilt>
              <button onClick={handleFetchNextPage}>Próximo</button>
            </Tilt>
          )}
        </li>
      </StyledControls>
      <Pagination>
        {currentPage &&
          pagination.map(i => (
            <li key={i}>
              <button
                onClick={handleClick}
                disabled={i === currentPage}
                className={i === currentPage ? 'active' : ''}
              >
                {i}
              </button>
            </li>
          ))}
      </Pagination>
    </>
  )
}
export default Controls
