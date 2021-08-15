import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 4rem;
  height: 4rem;
  border: 2px solid var(--colorPrimary);
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colorPrimary);
  font-size: 2rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: translate3d(0, -5px, 0);
  }
`
