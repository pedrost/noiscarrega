
import React, { useState, useCallback, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Head from 'next/head';

import Calculator from '../src/components/Calculator';

const IndexPageContainer = styled.div`
  background: white;
  height: 100%;
`;

const HeaderContainer = styled.header`
	margin: auto;
	background: #1F7ADF;
	color: white;
	text-align: center;
	padding: 42px 16px;
	width: 100%;
	position: relative;
`;

const SubheaderContainer = styled.header`
  width: 100%;
  color: white;
  background: #F5B5B0;
  height: 42px;
  text-align: end;
  margin: auto;
`;

const Title = styled.h1`
	color: white;
	font-size: 32px;
	text-transform: uppercase;
	font-family: 'Gilroy-Bold';
`;


const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndexPageContainer>
      <Head>
        <title>Bronze 4 Para Ouro 4 Boost</title>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Programa de seleção, capacitação e conexão de talentos às empresas do mercado digital.' />
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
				<HeaderContainer>
					<Title>Solo Boost </Title>
				</HeaderContainer>
        <Box display={{ xs: 'none', s: 'none', md: 'block' }} style={ { width: '100%'} }>
          <SubheaderContainer >
            <Grid container
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={
              {
                alignContent: "center",
                margin: "auto",
                height: "100%",
                fontSize: '14px'
              }
            }
            >
            <Grid item xs={7} style={ { margin: 'auto', cursor: 'pointer', paddingRight: "32px", color: '#771714', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'flex-end' } }>
              SERVIÇOS DUO
            </Grid>
            <Grid item xs={1} style={ { margin: 'auto', cursor: 'pointer', paddingRight: "32px", color: '#771714', height: '100%', alignItems: 'center', display: 'flex', borderLeft: '2px solid white', paddingLeft: '16px' } }>
              VITÓRIA
            </Grid>
            <Grid item xs={1} style={ { margin: 'auto', cursor: 'pointer', paddingRight: "32px", color: '#771714', height: '100%', alignItems: 'center', display: 'flex', borderLeft: '2px solid white', paddingLeft: '16px'} } >
              PLACEMENT
            </Grid>
            <Grid item xs={1} style={ { margin: 'auto', cursor: 'pointer', paddingRight: "32px", color: '#771714', height: '100%', alignItems: 'center', display: 'flex', borderLeft: '2px solid white', paddingLeft: '16px' } } >
              NORMAL
            </Grid>
            <Grid item xs={1} style={ { margin: 'auto', cursor: 'pointer', paddingRight: "32px", color: '#771714', height: '100%', alignItems: 'center', display: 'flex', borderLeft: '2px solid white', paddingLeft: '16px' } }>
              DIVISAO
            </Grid>
            </Grid>
          </SubheaderContainer>
          
        </Box>
      </Grid>
			<Calculator />
    </IndexPageContainer>
  );
}

export default App;
