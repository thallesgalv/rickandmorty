import { useEffect, useState } from 'react'

const useMatchMedia = (media: string): boolean => {
  const [match, setMatch] = useState(null)

  useEffect(() => {
    function changeMatch() {
      const checked = window.matchMedia(media).matches
      setMatch(checked)
    }

    changeMatch()
    window.addEventListener('resize', changeMatch)

    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [])

  return match
}

export default useMatchMedia
