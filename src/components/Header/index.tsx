import React, { useState } from 'react'
import { StyledHeader, MenuMobile, Menu } from './styles'
import Link from 'next/link'
import { FcMenu } from 'react-icons/fc'
import useMatchMedia from '../../hooks/useMatchMedia'

export type HeaderProps = {
  isOpen: boolean
}

const Header: React.FC = () => {
  const mobile = useMatchMedia('(max-width: 1023px')
  const [isOpen, setisOpen] = useState(false)

  return (
    <StyledHeader isOpen={isOpen}>
      <nav>
        {mobile && (
          <MenuMobile onClick={() => setisOpen(!isOpen)}>
            <FcMenu />
          </MenuMobile>
        )}
        <Menu isOpen={isOpen}>
          <li onClick={() => setisOpen(false)}>
            <Link href={'/'}>
              <a>Personagens</a>
            </Link>
          </li>
          <li onClick={() => setisOpen(false)}>
            <Link href={'/locations'}>
              <a>Localizações</a>
            </Link>
          </li>
          <li onClick={() => setisOpen(false)}>
            <Link href={'/episodes'}>
              <a>Episódios</a>
            </Link>
          </li>
          <li onClick={() => setisOpen(false)}>
            <Link href={'/charts'}>
              <a>Gráficos</a>
            </Link>
          </li>
        </Menu>
      </nav>
    </StyledHeader>
  )
}

export default Header
