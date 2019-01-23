import * as React from 'react';
import {hentGeografiskTilknytning} from "../../api/api";
import {GeografiskTilknytning} from "../../datatyper/geografiskTilknytning";
import DataFetcher from "../../utils/dataFetcher";

export const initalStateGeografiskTilknyting: GeografiskTilknytning = {
    geografiskTilknytning: "",
};

const GeografiskTilknytningContext = React.createContext<GeografiskTilknytning>(initalStateGeografiskTilknyting);

interface GeografiskTilknytningProps {
    children : React.ReactNode;
}



function GeografiskTilknytningProvider (props: GeografiskTilknytningProps) {
    return (
        <DataFetcher<GeografiskTilknytning> fetchFunc={hentGeografiskTilknytning}>
            {(data: GeografiskTilknytning) =>
                <GeografiskTilknytningContext.Provider value={data}>
                    {props.children}
                </GeografiskTilknytningContext.Provider>
            }
        </DataFetcher>
    )
}

//TODO FIKS TYPER
export function geografiskTilknytningContextConsumerHoc<P>(Component: React.ComponentType<P & GeografiskTilknytning>): React.ComponentType<P> {
    return (props: P) => (
        <GeografiskTilknytningContext.Consumer>
            {(geografiskTilknytning: GeografiskTilknytning) => {
                return <Component {...props} {...geografiskTilknytning} />;
            }}
        </GeografiskTilknytningContext.Consumer>
    );
};

export default GeografiskTilknytningProvider;