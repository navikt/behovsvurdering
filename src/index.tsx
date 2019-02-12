import 'babel-polyfill';
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';
import App from './App';

if (process.env.REACT_APP_MOCK === 'true') {
    require('./mock');
}

ReactDOM.render(<App />, document.getElementById('root'));
