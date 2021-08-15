import React, { useEffect } from 'react'
import lottie from 'lottie-web'
import load from '../../../public/load.json'
import { Container } from './styles'

const Load: React.FC = () => {
  const containerLottie = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerLottie.current) {
      lottie.loadAnimation({
        container: containerLottie.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: load
      })
    }
    lottie.setSpeed(1.3)
  }, [])

  return (
    <>
      <Container>
        <div ref={containerLottie} />
      </Container>
    </>
  )
}

export default Load
