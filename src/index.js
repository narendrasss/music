import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import './index.css';

library.add(faArrowLeft, faCircleNotch);

ReactDOM.render(<App />, document.getElementById('root'));
