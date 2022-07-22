import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
