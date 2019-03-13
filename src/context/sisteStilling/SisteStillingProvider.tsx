import * as React from 'react';
import { hentSisteStilling } from '../../api/api';
import SisteStillingType from '../../datatyper/sisteStillingFraRegistrering';
import DataFetcher from '../../utils/dataFetcher';

export const initalStateStilling: SisteStillingType = {
    sisteStilling : {
        label: '',
        konseptId: 0,
        styrk08: '',
    },
};

export const SisteStillingContext = React.createContext<SisteStillingType>(initalStateStilling);

interface SisteStillingProviderProps {
    children: React.ReactNode;
}

function SisteStillingProvider(props: SisteStillingProviderProps) {

    const sisteStillingFallback = () =>
        new Promise<SisteStillingType>((resolve) => (resolve(initalStateStilling)));

    return (
        <DataFetcher<SisteStillingType> fetchFunc={() => hentSisteStilling(sisteStillingFallback)} >
            {(data: SisteStillingType) =>
                <SisteStillingContext.Provider value={data}>
                    {props.children}
                </SisteStillingContext.Provider>
            }
        </DataFetcher>
    );
}

export default SisteStillingProvider;