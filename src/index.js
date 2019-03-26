import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import './index.css';

library.add(faArrowLeft, faSpinner);

ReactDOM.render(<App />, document.getElementById('root'));
