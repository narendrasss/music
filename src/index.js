import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faCircleNotch,
  faTimes,
  faPlus,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

import App from './App';
import './index.css';

library.add(faArrowLeft, faCircleNotch, faTimes, faPlus, faCheck);

ReactDOM.render(<App />, document.getElementById('root'));
