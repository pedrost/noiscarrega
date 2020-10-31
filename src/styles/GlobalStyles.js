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
    font-family: 'Roboto';
  }

  html {
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: white;
    background: url(${require('../assets/bg.png')}) no-repeat -700px 102px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
 }
  label {
    margin: 10px 0;
    cursor: pointer;
    text-indent: -9999px;
    width: 42px;
    height: 16px;
    background: white;
    display: block;
    border: 1px solid white;
    position: relative;
 }
  label:after {
    content: '';
    position: absolute;
    left: 5px;
    width: 10px;
    height: 24px;
    top: -6px;
    border: 1px solid white;
    background: #afafaf;
    transition: 0.3s;
 }
  input:checked + label {
    background: white;
 }
  input:checked + label:after {
    background: #46b5f1 !important;
 }
  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
 }
  label:active:after {
    width: 10px;
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