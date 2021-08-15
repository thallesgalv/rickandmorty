import { useState, useCallback } from 'react'

class Response {
  data: any
  error: Error
  loading: boolean
  request: (arg: string) => Promise<void>
}

const useFetch = (): Response => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const request = useCallback(async (url: string) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url)
      json = await response.json()
      if (!response.ok) throw new Error(json.message)
    } catch (error) {
      json = null
      setError(error.message)
    } finally {
      setData(json)
      setLoading(false)
    }
  }, [])

  return { data, error, loading, request }
}

export default useFetch
