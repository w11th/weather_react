import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Weather from './Weather.jsx';

ReactDOM.render(<Weather />, document.getElementById('root'));
registerServiceWorker();
