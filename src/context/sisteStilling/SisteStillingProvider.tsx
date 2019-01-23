import * as React from 'react';
import {hentSisteStilling} from "../../api/api";
import SisteStillingType from "../../datatyper/sisteStillingFraRegistrering";
import DataFetcher from "../../utils/dataFetcher";

export const initalStateStilling: SisteStillingType = {
    sisteStilling : {
        label: "",
        konseptId: 0,
        styrk08: "",
    },
};

const SisteStillingContext = React.createContext<SisteStillingType>(initalStateStilling);

interface SisteStillingProviderProps {
    children : React.ReactNode;
}

function SisteStillingProvider(props: SisteStillingProviderProps) {
    return (
        <DataFetcher<SisteStillingType> fetchFunc={hentSisteStilling}>
            {(data: SisteStillingType) =>
                <SisteStillingContext.Provider value={data}>
                    {props.children}
                </SisteStillingContext.Provider>
            }
        </DataFetcher>
    )
}


//TODO FIKS TYPER
export function sisteStillingConsumerHoc<P>(Component: React.ComponentType<P & SisteStillingType>): React.ComponentType<P> {
    return (props: P) => (
        <SisteStillingContext.Consumer>
            {(context: SisteStillingType) => {
                return <Component {...props} {...context} />;
            }}
        </SisteStillingContext.Consumer>
    );
};

export default SisteStillingProvider;