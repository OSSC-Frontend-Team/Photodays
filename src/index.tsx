import React from 'react';
import ReactDOM from 'react-dom';
import MainCal from './components/Calendar/MainCal';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './styles/global-style';
import { theme } from './styles/theme';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RecoilRoot>
      <App />
      <MainCal />
    </RecoilRoot>
  </ThemeProvider>,
  document.getElementById('root'),
);
