import * as React from 'react';
import Veilederpanel from 'nav-frontend-veilederpanel';
import veilederSvg from './nav-ansatt.svg';
import './feilmelding.less';

const Feilmelding = () => {
    let veilederpanelType: 'normal' | 'plakat' = 'plakat';

    if (window.matchMedia('(min-width: 768px)').matches) {
        veilederpanelType = 'normal';
    }

    return (
        <div className="feilmelding">
            <Veilederpanel
                type={veilederpanelType}
                svg={<img src={veilederSvg}/>}
                fargetema="feilmelding"
            >
                På grunn av feil i systemene våre kan vi ikke sende svaret ditt akkurat nå. Vi anbefaler deg å&nbsp;
                <a
                    href="https://www.nav.no/398761/kontakt-teknisk-brukerstøtte-nav.no"
                    className="lenke"
                >
                    kontakte teknisk brukerstøtte.
                </a>

            </Veilederpanel>
        </div>
    );
};
export default Feilmelding;