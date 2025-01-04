// import { createGlobalStyle } from "styled-components";
import 'modern-normalize';
import "@fontsource/orbitron";
import { css } from '@emotion/react';

export const GlobalStyle = css`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --v1: calc(max(9vw, 11vh));
    scrollbar-width: none;
     word-wrap: break-word;
  }

  body {
    font-family: 'Orbitron', sans-serif;
    background-color: #f9f7f7;
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    background-color: #000;
     transition-duration: 300ms;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: 400;
    color: #fff;
    font-family: "Tt Firs Neue";
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    &:hover {
      color: rgb(0, 250, 225);
    }
    &:visited {
      text-decoration: none;
    }
  }

  button {
  cursor: pointer;
  background: linear-gradient(90deg, 
 #e4e4e4,
   0%,  #e4e4e4
 33.333%,
    #203a43, 33.333%,
     #2c5364 66.666%,
      #e4e4e4 66.666%, 
      #e4e4e4,) 100%);
background-size: 305% 100%;
background-position: right bottom;
 transition: all 0.5s ease-in-out;
 
  }

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  nav, footer, header {
    display: block;
  }

  input, button, textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

    ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
   
    }


    html, body {
  height: -webkit-fill-available;
  font-smoothing: antialiased;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

body::-webkit-scrollbar {
  display: none;
}

button, input, textarea {

  font-size: 16px;

}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
    color: #fff;
  }
}

  @keyframes buttonAnimationOut {
                            0% {
                                background-position: center bottom;
                            }

                            99.99% {
                                background-position: left bottom;
                            }

                            100% {
                                background-position: right bottom;
                            }
                        }

  @keyframes move {
  from {
    tranform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}
`;