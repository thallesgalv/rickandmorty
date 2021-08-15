import styled from 'styled-components'
import { TitleProps } from '.'

export const StyledTitle = styled.h1<TitleProps>`
  max-width: 20rem;
  color: var(--colorPrimary);
  font: 400 2.25rem/2.5rem var(--fontTitle);
  margin: ${({ big }) => (big ? '4rem auto' : '2rem auto')};
  text-align: center;
  font: ${({ big }) =>
    big
      ? '400 3rem/1 var(--fontTitle)'
      : '400 2.25rem/2.5rem var(--fontTitle)'};
`
