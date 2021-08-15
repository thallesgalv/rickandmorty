import React from 'react'
import { StyledTitle } from './styles'

export type TitleProps = {
  text?: string
  big?: boolean
}

const Title: React.FC<TitleProps> = ({ text, big }) => {
  return <StyledTitle big={big}>{text}</StyledTitle>
}

export default Title
