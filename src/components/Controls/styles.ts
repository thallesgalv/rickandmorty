import styled from 'styled-components'

export const StyledControls = styled.ul`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    background: transparent;
    color: #fff;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    border: 2px solid #0e6326;
    padding: 0.5rem 1rem;
    color: var(--colorText);
    border-radius: 1rem;
    position: relative;

    &:after {
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--colorPrimary);
      opacity: 0.2;
      filter: blur(0.5rem);
      z-index: -1;
      border-radius: 2rem;
    }
  }
`

export const Pagination = styled.ul`
  width: var(--innerContainer);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  gap: 1rem;

  button {
    border: 1px solid var(--colorPrimary);
    background: transparent;
    color: var(--colorBody);
    font: 400 1rem/1.5rem var(--fontBody);
    width: 2rem;
    cursor: pointer;

    &.active {
      border: 1px solid var(--colorText);
      background: #154021;
      cursor: default;
    }
  }
`
