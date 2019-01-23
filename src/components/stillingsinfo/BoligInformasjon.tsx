import * as React from "react";
import {Ingress} from "nav-frontend-typografi";
import {
    kommuneOgLedigeStillingerContextConsumerHoc
} from "../../context/kommuneOgLedigeStillinger/KommuneOgLedigeStillingerProvider";
import {KommuneOgLedigeStillinger} from "../../datatyper/kommuneOgLedigeStillinger";

function BoligInformajson(props: KommuneOgLedigeStillinger) {
    return (
        <div className="stillingContainer__innhold">
            <div className="stillingContainer__innhold__linje">
                <Ingress>Kommune : {props.kommunenavn} </Ingress>
            </div>
        </div>
    )
}

export default kommuneOgLedigeStillingerContextConsumerHoc<{}>(BoligInformajson);