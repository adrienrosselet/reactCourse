import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore, { history } from './utils/store';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

//const { store, persistor } = initStore();
//<PersistGate loading={ null } persistor={ persistor }>
//</PersistGate>
//<Provider store={ store }>
ReactDOM.render(
  <Provider store={ initStore() }>
    <ConnectedRouter history={history}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </ConnectedRouter>
   </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
