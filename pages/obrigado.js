
import GlobalStyles from '../src/styles/GlobalStyles';
import Head from 'next/head';

import "../config/i18n";
import "isomorphic-fetch";

export default function MyApp({ Component, pageProps }) {
  return (
  <>
    <GlobalStyles/>
    <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Obrigado!</title>
        <link rel="stylesheet" href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
    </Head>
    <body style={ { backgroundColor: 'rgba(0, 0, 0, 0.67)', color: 'white' } }>
        <header class="site-header" id="header">
            <i class="fa fa-check main-content__checkmark" style={{ fontSize: '64px' }} id="checkmark"></i>
            <h1 class="site-header__title" data-lead-id="site-header-title" style={ { fontSize: '52px' } }>Compra Efetuada!</h1>
        </header>

        <div class="main-content">
            <p class="main-content__body" data-lead-id="main-content-body">Obrigado por comprar com a gente! Agora basta entrar em contato conosco pelo <a rel="noopener" target="_blank" href="https://api.whatsapp.com/send?phone=5567992335556&text=Ol%C3%A1%21+Efetuei+a+compra+no+nois+carrega%2C+qual+o+pr%C3%B3ximo+passo%3F&lang=pt_br "style={ { color: '#49A995 ', cursor: 'pointer '}}> whatsapp</a> ou <a rel="noopener" target="_blank" href="mailto:contato@noiscarrega.com" style={ { color: '#49A995 ', cursor: 'pointer '}}>e-mail</a> que vamos prosseguir com seu boost!</p>
        </div>

        <footer class="site-footer" id="footer">
            <p class="site-footer__fineprint" id="fineprint">Nois Carrega | Copyright ©2020 | All Rights Reserved</p>
        </footer>
    </body>
  </>
  );
}