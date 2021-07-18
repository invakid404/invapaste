import 'highlight.js/styles/dracula.css';
import 'jetbrains-mono';

import Head from 'next/head';
import resetercss from 'node_modules/reseter.css/src/styled-components/ts/reseter';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${resetercss}

body {
  line-height: 1;
  font-family: 'JetBrains Mono';
  overflow-x: hidden;
  max-width: 100vw;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

#__next {
  width: 100vw;
  height: 100vh;
}
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
