import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Black_0.ttf');
  }

  @font-face {
    font-family: 'Gilroy-Medium';
    src: url('/fonts/Gilroy-Medium_0.ttf');
  }

  @font-face {
    font-family: 'Gilroy-Regular';
    src: url('/fonts/Gilroy-Regular_0.ttf');
  }

  @font-face {
    font-family: 'Gilroy-SemiBold';
    src: url('/fonts/Gilroy-SemiBold_0.ttf');
  }

  @font-face {
    font-family: 'Gilroy-Bold';
    src: url('/fonts/Gilroy-Bold_0.ttf');
  }

  @font-face {
    font-family: 'Roboto-Regular';
    src: url('/fonts/Roboto-Regular.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat' !important;
  }

  html, body, #root {
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-image: url(${require('../assets/bg.png')});
  }

  #__next {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  #slider {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
  }

  .slide-in {
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
  }

  .slide-out {
    animation: slide-out 0.5s forwards;
    -webkit-animation: slide-out 0.5s forwards;
  }
      
  @keyframes slide-in {
    100% { transform: translateX(0%); }
  }

  @-webkit-keyframes slide-in {
    100% { -webkit-transform: translateX(0%); }
  }
      
  @keyframes slide-out {
    0% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }

  @-webkit-keyframes slide-out {
    0% { -webkit-transform: translateX(0%); }
    100% { -webkit-transform: translateX(100%); }
  }

  .fade-out {
    animation: fadeOut ease 3s;
    -webkit-animation: fadeOut ease 3s;
    -moz-animation: fadeOut ease 3s;
    -o-animation: fadeOut ease 3s;
    -ms-animation: fadeOut ease 3s;
  }
  @keyframes fadeOut {
    0% {
      opacity:1;
    }
    50% {
      opacity:1;
    }
    80% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity:1;
    }
    50% {
      opacity:1;
    }
    80% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  .MuiDialog-paperFullWidth {
    width: calc(100vw - (100vw / 4));
  }

`;