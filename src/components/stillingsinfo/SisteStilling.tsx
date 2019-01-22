import * as React from 'react';
import {Ingress} from "nav-frontend-typografi";
import {sisteStillingConsumerHoc} from "../../context/sisteStilling/SisteStillingProvider";
import SisteStillingType from "../../datatyper/sisteStillingFraRegistrering";

type StillingInfoProps = {context : SisteStillingType};

function SisteStilling(props: StillingInfoProps) {
    return (
        <div className="stillingInfo__innhold">
            <div className="stillingInfo__innhold__linje">
                <Ingress>Siste stilling : {props.context.sisteStilling.label}</Ingress>
            </div>
        </div>)
}

export default sisteStillingConsumerHoc(SisteStilling);