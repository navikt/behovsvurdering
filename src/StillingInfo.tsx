import * as React from 'react';
import {Ingress} from "nav-frontend-typografi";
import {sisteStillingConsumerHoc} from "./context/sisteStilling/SisteStillingProvider";
import {SisteStillingType} from "./context/sisteStilling/sisteStillingTyper";


type StillingInfoProps = SisteStillingType


function StillingInfo(props: StillingInfoProps){
    return (
        <div className= "stillingInfo">
            <div className="stillingInfo__innhold">
                <div className="stillingInfo__innhold__linje">
                    <Ingress>Siste stilling : {props.sisteStilling.label}</Ingress>
                </div>
            </div>
        </div>
    )
}

export default sisteStillingConsumerHoc(StillingInfo);