import * as React from "react";
import {Ingress} from "nav-frontend-typografi";
import {
    kommuneOgLedigeStillingerContextConsumerHoc
} from "../../context/kommuneOgLedigeStillinger/KommuneOgLedigeStillingerProvider";
import {KommuneOgLedigeStillinger} from "../../datatyper/kommuneOgLedigeStillinger";

interface BoligInformajsonProps {
    kommuneOgLedigeStillingerContext: KommuneOgLedigeStillinger;
}

function BoligInformajson(props: BoligInformajsonProps) {
    return (
        <div className="stillingContainer__innhold">
            <div className="stillingContainer__innhold__linje">
                <Ingress>Kommune : {props.kommuneOgLedigeStillingerContext.kommunenavn} </Ingress>
            </div>
        </div>
    )
}

export default kommuneOgLedigeStillingerContextConsumerHoc(BoligInformajson);