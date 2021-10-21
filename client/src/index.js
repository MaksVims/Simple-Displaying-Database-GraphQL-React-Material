import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

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

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </ApolloProvider>
  ,
  document.getElementById('root')
);

