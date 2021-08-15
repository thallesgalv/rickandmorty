import styled, { css } from 'styled-components'
import { HeaderProps } from '.'

export const StyledHeader = styled.header<HeaderProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  background: #154021;

  ${({ isOpen }) =>
    isOpen &&
    css`
      height: 100vh;
      position: fixed;
      top: 0;
      z-index: 999;
      animation: show.5s forwards;

      @keyframes show {
        from {
          height: 0;
          opacity: 0;
        }
        to {
          height: 100vh;
          opacity: 1;
        }
      }

      nav {
        height: 100%;

        ul {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
      }
    `}

  nav {
    width: var(--innerContainer);
    display: ${({ isOpen }) => (isOpen ? 'block' : 'flex')};
    justify-content: flex-end;

    @media (min-width: 768px) {
      justify-content: center;
    }
  }
`

export const Menu = styled.ul<HeaderProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  justify-content: center;
  align-items: center;

  @media (min-width: 1023px) {
    display: flex;
    gap: 4rem;
  }

  a {
    color: #75b888;
    font: 400 1.875rem/2.25rem var(--fontTitle);
    padding: 1rem;
    position: relative;

    @media (min-width: 768px) {
      &:before {
        content: '';
        width: 2rem;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: auto;
        background: no-repeat center/contain url('/pickle.png');
        z-index: -1;
        transition: all 0.3s ease-in-out;
        opacity: 0;
      }

      &:hover {
        &:before {
          z-index: unset;
          left: -1rem;
          opacity: 1;
        }
      }
    }
  }
`

export const MenuMobile = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0.5rem 0;
  margin-left: auto;
  cursor: pointer;

  g {
    fill: #75b888;
  }
`
