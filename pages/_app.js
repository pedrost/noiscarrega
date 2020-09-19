import { useEffect } from 'react';
import GlobalStyles from '../src/styles/GlobalStyles';

import "../config/i18n";
import "isomorphic-fetch";

export default function MyApp({ Component, pageProps }) {

  return (
  <div style={ { backgroundImage: "url(" + `${require("../src/assets/bg.png")}` + ")"} }>
    <GlobalStyles/>
    <script
      src="https://www.paypal.com/sdk/js?currency=BRL&client-id=ARuGewmbIlEYZSE25t-LR0ahoXhC4jmIY8DZzEodpiKK13o-zx90Dr3I0RERs5kbzGR3twzhNfpCkI_Z"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
    </script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700' rel='stylesheet' type='text/css' />
    <Component {...pageProps} />
  </div>
  );
}