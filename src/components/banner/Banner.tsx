import * as React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';

function Banner () {
    return(
        <div className="bs-banner">
            <div className="banner__innhold">
                <Systemtittel tag="h1">Dine jobbmuligheter</Systemtittel>
            </div>
        </div>
    );
}

export default Banner;