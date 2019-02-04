import * as React from 'react';
import { GeografiskTilknytning } from '../../datatyper/geografiskTilknytning';
import SisteStillingType from '../../datatyper/sisteStillingFraRegistrering';
import { geografiskTilknytningContextConsumerHoc } from '../geografiskTilknytning/GeografiskTilknytningProvider';
import { sisteStillingConsumerHoc } from '../sisteStilling/SisteStillingProvider';
import { KommuneOgLedigeStillinger } from '../../datatyper/kommuneOgLedigeStillinger';
import DataFetcher from '../../utils/dataFetcher';
import { hentKommuneOgStillinger } from '../../api/api';

//TODO FIKS typen KommuneOgLedigeStillinger

export const initalStateKommuneOgLedigeStillinger: KommuneOgLedigeStillinger = {
    kommunenavn: '',
    antalStillinger: 0,
    antalStillingerIKategorin: 0
};

export const KommuneOgLedigeStillingerContext = React.createContext<KommuneOgLedigeStillinger>(initalStateKommuneOgLedigeStillinger);

type  KommuneOgLedigeStillingerProps = SisteStillingType & GeografiskTilknytning & {children: React.ReactNode};

//TODO BRUK RIKTIG ENDEPUNKT DENNE ER BARA TEST
function KommuneOgLedigeStillingerProvider (props: KommuneOgLedigeStillingerProps) {
    const {styrk08} = props.sisteStilling;

    const fallBackObj: KommuneOgLedigeStillinger = {
        kommunenavn: 'Skall komma fra Mia',
        antalStillinger: 0,
        antalStillingerIKategorin: 0 };

    const kommuneOgLedigeStillingerErrorHandler = () =>
        new Promise<KommuneOgLedigeStillinger>((resolve) => (resolve(fallBackObj)));

    return (
        <DataFetcher<KommuneOgLedigeStillinger> fetchFunc={() => hentKommuneOgStillinger([props.geografiskTilknytning, styrk08], kommuneOgLedigeStillingerErrorHandler)}>
            {(data: KommuneOgLedigeStillinger) =>
                <KommuneOgLedigeStillingerContext.Provider value={data}>
                    {props.children}
                </KommuneOgLedigeStillingerContext.Provider>
            }
        </DataFetcher>
    );

}

export function kommuneOgLedigeStillingerContextConsumerHoc<P>(Component: React.ComponentType<P & KommuneOgLedigeStillinger>): React.ComponentType<P> {
    return (props: P) => (
        <KommuneOgLedigeStillingerContext.Consumer>
            {(kommuneOgLedigeStillinger: KommuneOgLedigeStillinger) => {
                return <Component {...props} {...kommuneOgLedigeStillinger} />;
            }}
        </KommuneOgLedigeStillingerContext.Consumer>
    );
}

export default sisteStillingConsumerHoc(geografiskTilknytningContextConsumerHoc(KommuneOgLedigeStillingerProvider));