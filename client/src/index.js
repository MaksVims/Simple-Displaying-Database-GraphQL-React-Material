import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7043',
    },
    secondary: {
      main: '#6200ea',
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

