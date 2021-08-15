import React, { useEffect } from 'react'
import lottie from 'lottie-web'
import notFound from '../../../public/notfound.json'
import Title from '../Title'
import { Container } from './styles'

const NotFound: React.FC = () => {
  const containerLottie = React.useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (containerLottie.current) {
      lottie.loadAnimation({
        container: containerLottie.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: notFound
      })
    }
    lottie.setSpeed(1.3)
  }, [])

  return (
    <>
      <Container>
        <div ref={containerLottie} />
        <Title text="404 Não encontrado" />
      </Container>
    </>
  )
}

export default NotFound
