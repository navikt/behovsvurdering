import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'whatwg-fetch';
import { Auth, EnforceLoginLoader } from '@navikt/nav-dekoratoren-moduler/dist';
import './index.less';
import App from './App';
import { useState } from 'react';

const AppWithLogin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const authCallback = (auth: Auth) => {
        setIsAuthenticated(auth.authenticated);
    };

    return (
        <EnforceLoginLoader authCallback={authCallback}>
            {isAuthenticated ?  <App /> : <></>}
        </EnforceLoginLoader>
    );
};

if (process.env.REACT_APP_MOCK === 'true') {
    require('./mock');
    ReactDOM.render(<App />, document.getElementById('root'));
} else {
    ReactDOM.render(<AppWithLogin />, document.getElementById('root'));
}
