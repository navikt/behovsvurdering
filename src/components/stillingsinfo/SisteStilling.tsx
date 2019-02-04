import * as React from 'react';
import { Ingress, Normaltekst } from 'nav-frontend-typografi';
import { sisteStillingConsumerHoc } from '../../context/sisteStilling/SisteStillingProvider';
import SisteStillingType from '../../datatyper/sisteStillingFraRegistrering';

function SisteStilling(props: SisteStillingType) {
    if (!props.sisteStilling) {
        return (
            <Normaltekst>
                Brukeren har ikke oppgitt siste stilling i den nye registreringsløsningen.
            </Normaltekst>
        );
    }
    return (
        <div className="stillingContainer__innhold">
            <div className="stillingContainer__innhold__linje">
                <Ingress>Siste stilling : {props.sisteStilling.label}</Ingress>
            </div>
        </div>);
}

export default sisteStillingConsumerHoc<{}>(SisteStilling);