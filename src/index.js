import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faCircleNotch,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import App from './App';
import './index.css';

library.add(faArrowLeft, faCircleNotch, faTimes);

ReactDOM.render(<App />, document.getElementById('root'));
