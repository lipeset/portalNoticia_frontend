import App from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const GlobalStyle = createGlobalStyle`
  .classA {
    cursor: pointer;
    transition: opacity .3s;
    &:focus,
    font-weight: bold;
    text-decoration: none;
    &:hover {
      opacity: .5;
    }
  }

  .video-container {
    overflow: hidden;
    position: relative;
    width:100%;
  }

  .video-container::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}