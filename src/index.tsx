import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from './core/user-context';
import { PlayerProvider } from './core/player-context';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core'
const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        padding: "0 10px"
      }
    }
  }
})
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>

    <PlayerProvider>
      <Provider  >
        <App />
      </Provider>
    </PlayerProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
