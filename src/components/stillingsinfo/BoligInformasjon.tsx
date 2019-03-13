import * as React from 'react';
import { Ingress } from 'nav-frontend-typografi';
import {
    KommuneOgLedigeStillingerContext
} from '../../context/kommuneOgLedigeStillinger/KommuneOgLedigeStillingerProvider';

function BoligInformasjon() {
    const context = React.useContext(KommuneOgLedigeStillingerContext);

    return (
        <div className="stillingContainer__innhold">
            <div className="stillingContainer__innhold__linje">
                <Ingress>Fylke : {context.fylkesnavn} </Ingress>
            </div>
        </div>
    );
}

export default BoligInformasjon;
