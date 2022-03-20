import ReactDOM from 'react-dom';
import Main from './components/Main/Main';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './styles/global-style';
import { theme } from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    <Main />
  </ThemeProvider>,
  document.getElementById('root'),
);
