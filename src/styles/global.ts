import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@font-face {
  font-family: 'Shlop';
 src:url('/shlop.otf')
}

:root{
  --fontTitle: 'Shlop';
  --fontBody: 'Ubuntu';
  --colorPrimary:#24A148;
  --colorText:#fff;
  --innerContainer: calc(min(90%, 90rem));
  --gradientPrimary: linear-gradient(#24A148 0%, #1C8039 100%);
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
p,
span,
a,
h1,
ul,
img {
  margin: 0;
  padding: 0;
  display: block;
  font-weight: normal;
  font-size: 100%;

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  img[src$=".svg"] {
    height: auto;
    max-width: none;
    width: 100%;
  }

  li {
    list-style: none;
  }
}

body {
  background: linear-gradient(rgba(0,0,0,0.88),rgba(0,0,0,0.88)), url('/pattern.png');
  background-attachment: fixed;
  color: #fff;
}
`
