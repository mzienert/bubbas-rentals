import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./redux/store";
import 'fontsource-roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
  palette: {
      mode: 'dark',
  },
})

const renderApp = () =>
    ReactDOM.render(
      <React.StrictMode>
          <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
              <App />
            </ThemeProvider>
          </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
}

renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
