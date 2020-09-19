import React, { useState, useCallback, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Head from 'next/head';

import Calculator from '../src/components/Calculator';
import NoisCarregaLogo from '../src/assets/logo.png';

import Background from '../src/assets/bg.png';

const IndexPageContainer = styled.div`
  background: transparent;
  height: 100%;
`;

const HeaderContainer = styled.header`
	margin: auto;
	background: #1F7ADF;
	color: white;
	text-align: center;
	padding: 24px 16px;
	width: 100%;
	position: relative;
`;

const SubheaderContainer = styled.header`
  width: 100%;
  height: 16px;
  background: rgba(250,202,72,1);
  background: -moz-linear-gradient(left, rgba(250,202,72,1) 0%, rgba(250,201,72,1) 3%, rgba(249,196,70,1) 16%, rgba(246,183,67,1) 50%, rgba(246,183,67,1) 51%, rgba(245,167,64,1) 71%, rgba(243,152,62,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(250,202,72,1)), color-stop(3%, rgba(250,201,72,1)), color-stop(16%, rgba(249,196,70,1)), color-stop(50%, rgba(246,183,67,1)), color-stop(51%, rgba(246,183,67,1)), color-stop(71%, rgba(245,167,64,1)), color-stop(100%, rgba(243,152,62,1)));
  background: -webkit-linear-gradient(left, rgba(250,202,72,1) 0%, rgba(250,201,72,1) 3%, rgba(249,196,70,1) 16%, rgba(246,183,67,1) 50%, rgba(246,183,67,1) 51%, rgba(245,167,64,1) 71%, rgba(243,152,62,1) 100%);
  background: -o-linear-gradient(left, rgba(250,202,72,1) 0%, rgba(250,201,72,1) 3%, rgba(249,196,70,1) 16%, rgba(246,183,67,1) 50%, rgba(246,183,67,1) 51%, rgba(245,167,64,1) 71%, rgba(243,152,62,1) 100%);
  background: -ms-linear-gradient(left, rgba(250,202,72,1) 0%, rgba(250,201,72,1) 3%, rgba(249,196,70,1) 16%, rgba(246,183,67,1) 50%, rgba(246,183,67,1) 51%, rgba(245,167,64,1) 71%, rgba(243,152,62,1) 100%);
  background: linear-gradient(to right, rgba(250,202,72,1) 0%, rgba(250,201,72,1) 3%, rgba(249,196,70,1) 16%, rgba(246,183,67,1) 50%, rgba(246,183,67,1) 51%, rgba(245,167,64,1) 71%, rgba(243,152,62,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#faca48', endColorstr='#f3983e', GradientType=1 );
`;

const Logo = styled.img`
  width: 240px;
`;


const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndexPageContainer style={ { backgroundImage: "url(" + `${require("../src/assets/bg.png")}` + ")"} }>
      <Head>
        <title>Nois Carrega - Calculadora</title>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Calculadora especial do Nois Carrega!' />
        <meta name='keywords' content='Keywords' />
        <meta property='og:image' content='favicon-96x96.png'></meta>

        <link rel='manifest' href='/manifest.json' />
        <link href='favicon-72x72.png' rel='icon' type='image/png' sizes='72x72' />
        <link href='favicon-96x96.png' rel='icon' type='image/png' sizes='96x96' />
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        <meta name='theme-color' content='#63DC3E' />
      </Head>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
				<HeaderContainer style={ { backgroundImage: "url(" + `${require("../src/assets/fundo_header.png")}` + ")"} } >
					<Logo src={ NoisCarregaLogo }/>
				</HeaderContainer>
        <SubheaderContainer></SubheaderContainer>
      </Grid>
			<Calculator />
    </IndexPageContainer>
  );
}

export default App;
