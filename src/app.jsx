import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './components/app/store';
import Template from './components/app/template';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  </Provider>
);

export default App;
