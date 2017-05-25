import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './Store.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {view as Weather} from './weather';
import {view as CitySelector} from './city_selector';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CitySelector />
      <Weather />
    </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
