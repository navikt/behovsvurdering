import * as React from 'react';
import { Ingress, Normaltekst } from 'nav-frontend-typografi';
import { SisteStillingContext } from '../../context/sisteStilling/SisteStillingProvider';

function SisteStilling() {
    const stillingContext = React.useContext(SisteStillingContext);

    if (!stillingContext.sisteStilling) {
        return (
            <Normaltekst>
                Brukeren har ikke oppgitt siste stilling i den nye registreringsløsningen.
            </Normaltekst>
        );
    }
    return (
        <div className="stillingContainer__innhold">
            <div className="stillingContainer__innhold__linje">
                <Ingress>Siste stilling : {stillingContext.sisteStilling.label}</Ingress>
            </div>
        </div>);
}

export default SisteStilling;