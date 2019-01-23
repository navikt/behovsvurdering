import * as React from 'react';
import {GeografiskTilknytning} from "../../datatyper/geografiskTilknytning";
import SisteStillingType from "../../datatyper/sisteStillingFraRegistrering";
import {geografiskTilknytningContextConsumerHoc} from "../geografiskTilknytning/GeografiskTilknytningProvider";
import {sisteStillingConsumerHoc} from "../sisteStilling/SisteStillingProvider";
import {KommuneOgLedigeStillinger} from "../../datatyper/kommuneOgLedigeStillinger";
import DataFetcher from "../../utils/dataFetcher";
import {hentKommuneOgStillinger} from "../../api/api";

//TODO FIKS typen KommuneOgLedigeStillinger

export const initalStateKommuneOgLedigeStillinger: KommuneOgLedigeStillinger = {
    kommunenavn: "",
    antalStillinger: 0,
    antalStillingerIKategorin:0
};

const KommuneOgLedigeStillingerContext = React.createContext<KommuneOgLedigeStillinger>(initalStateKommuneOgLedigeStillinger);

interface KommuneOgLedigeStillingerProps {
    sisteStillingContext : SisteStillingType;
    geografiskTilknytningContext: GeografiskTilknytning;
    children: React.ReactNode;
}

//TODO BRUK RIKTIG ENDEPUNKT DENNE ER BARA TEST
function KommuneOgLedigeStillingerProvider ({sisteStillingContext, geografiskTilknytningContext, children}: KommuneOgLedigeStillingerProps) {
    const {geografiskTilknytning} = geografiskTilknytningContext;
    const {styrk08} = sisteStillingContext.sisteStilling;

    const fallBackObj: KommuneOgLedigeStillinger = {
        kommunenavn: "Skall komma fra Mia",
        antalStillinger: 0,
        antalStillingerIKategorin:0 };

    const kommuneOgLedigeStillingerErrorHandler = () =>
        new Promise<KommuneOgLedigeStillinger>((resolve) => (resolve(fallBackObj)));

    return (
        <DataFetcher<KommuneOgLedigeStillinger> fetchFunc={() => hentKommuneOgStillinger([geografiskTilknytning, styrk08], kommuneOgLedigeStillingerErrorHandler)}>
            {(data: KommuneOgLedigeStillinger) =>
                <KommuneOgLedigeStillingerContext.Provider value ={data}>
                    {children}
                </KommuneOgLedigeStillingerContext.Provider>
            }
        </DataFetcher>
    )

}

//TODO FIKS TYPER
export const kommuneOgLedigeStillingerContextConsumerHoc = (Component: any) => {
    return (props: any) => (
        <KommuneOgLedigeStillingerContext.Consumer>
            {context => {
                return <Component {...props} kommuneOgLedigeStillingerContext ={context} />;
            }}
        </KommuneOgLedigeStillingerContext.Consumer>
    );
};

export default sisteStillingConsumerHoc(geografiskTilknytningContextConsumerHoc(KommuneOgLedigeStillingerProvider));