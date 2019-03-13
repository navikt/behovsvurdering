import * as React from 'react';
import {
    GeografiskTilknytningContext
} from '../geografiskTilknytning/GeografiskTilknytningProvider';
import { SisteStillingContext } from '../sisteStilling/SisteStillingProvider';
import { KommuneOgLedigeStillinger } from '../../datatyper/kommuneOgLedigeStillinger';
import DataFetcher from '../../utils/dataFetcher';
import { hentKommuneOgStillinger } from '../../api/api';

const initialStateMia: KommuneOgLedigeStillinger = {
    kommunenavn: '',
    fylkesnavn: '',
    hovedkategori: {
        kategori: '',
        antallStillinger: 0
    },
    underkategori: {
        kategori: '',
        antallStillinger: 0
    }
};

export const initalStateKommuneOgLedigeStillinger: KommuneOgLedigeStillinger = initialStateMia;

export const KommuneOgLedigeStillingerContext = React.createContext<KommuneOgLedigeStillinger>(initalStateKommuneOgLedigeStillinger);

type  KommuneOgLedigeStillingerProps = {children: React.ReactNode};

function KommuneOgLedigeStillingerProvider (props: KommuneOgLedigeStillingerProps) {
    const geoContext = React.useContext(GeografiskTilknytningContext);
    const stillingContext = React.useContext(SisteStillingContext);

    const {styrk08} = stillingContext.sisteStilling;

    const fallBackObj: KommuneOgLedigeStillinger = initialStateMia;

    const kommuneOgLedigeStillingerErrorHandler = () =>
        new Promise<KommuneOgLedigeStillinger>((resolve) => (resolve(fallBackObj)));

    return (
        <DataFetcher<KommuneOgLedigeStillinger> fetchFunc={() => hentKommuneOgStillinger([geoContext.geografiskTilknytning, styrk08], kommuneOgLedigeStillingerErrorHandler)}>
            {(data: KommuneOgLedigeStillinger) =>
                <KommuneOgLedigeStillingerContext.Provider value={data}>
                    {props.children}
                </KommuneOgLedigeStillingerContext.Provider>
            }
        </DataFetcher>
    );

}

export default KommuneOgLedigeStillingerProvider;