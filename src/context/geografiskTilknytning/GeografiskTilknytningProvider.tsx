import * as React from 'react';
import {API_VEILARBPERSON, API_VEILARBREGISTRERING, hentGeografiskTilknytning} from "../../api/api";
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
        <DataFetcher<GeografiskTilknytning> fetchFunc={()=> hentGeografiskTilknytning()}>
            {(data: GeografiskTilknytning) =>
                <GeografiskTilknytningContext.Provider value={data}>
                    {props.children}
                </GeografiskTilknytningContext.Provider>
            }
        </DataFetcher>
    )
}

//TODO FIKS TYPER
export const geografiskTilknytningContextConsumerHoc = (Component: any) => {
    return (props: any) => (
        <GeografiskTilknytningContext.Consumer>
            {context => {
                return <Component {...props} geografiskTilknytningContext = {context} />;
            }}
        </GeografiskTilknytningContext.Consumer>
    );
};

export default GeografiskTilknytningProvider;