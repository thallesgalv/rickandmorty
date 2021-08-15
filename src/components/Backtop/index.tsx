import React from 'react'
import { StyledButton } from './styles'
import { AiOutlineVerticalAlignTop } from 'react-icons/ai'

const Backtop: React.FC = () => {
  return (
    <StyledButton onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
      <AiOutlineVerticalAlignTop />
    </StyledButton>
  )
}

export default Backtop
