import styled from 'styled-components'

export const StyledFilters = styled.form`
  width: var(--innerContainer);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
    flex-direction: row;
  }

  label {
    color: var(--colorPrimary);
    font: 400 1rem/1.5rem var(--fontBody);
    width: 100%;

    @media (min-width: 768px) {
      width: 12rem;
    }

    input,
    select {
      width: 100%;
      height: 3rem;
      border: 1px solid var(--colorText);
      color: var(--colorText);
      padding: 0.25rem;
      border-radius: 0.25rem;
      font: 400 1rem/1.5rem var(--fontBody);
      outline: none;
      padding-left: 1rem;
      background: rgba(36, 161, 72, 0.2);
      font-family: var(--fontBody);
      margin-top: 0.25rem;

      @media (min-width: 768px) {
        height: 2rem;
      }
    }

    option {
      background: #171717;
      color: #fff;
      font-family: var(--fontBody);
    }
  }
`
