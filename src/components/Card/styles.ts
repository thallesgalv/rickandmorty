import styled from 'styled-components'

export const StyledCard = styled.li`
  border: 1px solid var(--colorText);
  border-radius: 2rem;
  padding: 1rem;
  display: grid;
  place-items: center;
  gap: 0.25rem;
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

  > h1 {
    color: var(--colorPrimary);
    font: 400 1.875rem/2.25rem var(--fontTitle);
    text-align: center;
  }

  p {
    width: 100%;
    font: 400 1rem/1.5rem var(--fontBody);
    text-align: center;
  }
`
export const StatusCircle = styled.span`
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  display: inline-block;
  margin-left: 0.5rem;
`

export const ContainerImg = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;

  section {
    width: 100%;
    height: fit-content;
  }

  svg {
    fill: url('#gradient');
  }

  img {
    width: 120px;
    height: 120px;
    clip-path: circle(50%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    transform: translateZ(20px);

    @media (min-width: 1536px) {
      width: 150px;
      height: 150px;
    }
  }

  .Tilt {
    transform-style: preserve-3d;
  }
`
export const CardGrid = styled.ul`
  width: var(--innerContainer);
  margin: 4rem auto;
  overflow-x: scroll;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  grid-template-rows: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-flow: unset;
    grid-auto-columns: unset;
    overflow: unset;
    justify-content: center;
  }
`
