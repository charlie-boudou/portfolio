import React from 'react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import theme from './reducers/theme';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Layout } from './pages/Layout';

const store = configureStore({
  reducer: { theme },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Router/>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
