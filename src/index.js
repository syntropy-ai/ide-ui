import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
//import registerServiceWorker from './registerServiceWorker';

import defaultTheme from './theme'
import App from './App'

const theme = createMuiTheme(defaultTheme)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
//registerServiceWorker();
