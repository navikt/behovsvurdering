import * as React from 'react';
import AlertStripe from 'nav-frontend-alertstriper';

const Feilmelding = () =>
    <AlertStripe type="advarsel">
        Det skjedde en feil i systemene våre. Ta kontakt med vår <a href="https://www.nav.no/398761/kontakt-teknisk-brukerst%C3%B8tte-nav.no">teknisk brukerstøtte</a>.
    </AlertStripe>;

export default Feilmelding;