import React from 'react'
import { StyledFooter } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import Logo from '../Logo'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>
        Feito por
        <a
          href="https://www.thallesgalvao.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <Logo />
        </a>
      </p>
      <p>
        Repo:
        <a
          href="https://github.com/thallesgalv/rickandmorty"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
