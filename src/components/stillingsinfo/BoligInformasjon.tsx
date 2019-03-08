import * as React from 'react';
import { Ingress } from 'nav-frontend-typografi';
import {
    kommuneOgLedigeStillingerContextConsumerHoc
} from '../../context/kommuneOgLedigeStillinger/KommuneOgLedigeStillingerProvider';
import { KommuneOgLedigeStillinger } from '../../datatyper/kommuneOgLedigeStillinger';

function BoligInformasjon(props: KommuneOgLedigeStillinger) {
    return (
        <div className="stillingContainer__innhold">
            <div className="stillingContainer__innhold__linje">
                <Ingress>Fylke : {props.fylkesnavn} </Ingress>
            </div>
        </div>
    );
}

export default kommuneOgLedigeStillingerContextConsumerHoc<{}>(BoligInformasjon);
