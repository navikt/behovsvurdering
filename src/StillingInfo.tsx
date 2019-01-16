import * as React from 'react';
import {Undertekst} from "nav-frontend-typografi";
import {sisteStillingConsumerHoc} from "./context/sisteStilling/SisteStillingProvider";
import {SisteStillingType} from "./context/sisteStilling/sisteStillingTyper";


type StillingInfoProps = SisteStillingType


function StillingInfo(props: StillingInfoProps){
    return (
        <div className= "stillingInfo">
            <div className="stillingInfo__innhold">
                <div className="stillingInfo__innhold__linje">
                    <Undertekst>Siste stilling : {props.sisteStilling.label}</Undertekst>
                </div>
            </div>
        </div>
    )
}

export default sisteStillingConsumerHoc(StillingInfo);