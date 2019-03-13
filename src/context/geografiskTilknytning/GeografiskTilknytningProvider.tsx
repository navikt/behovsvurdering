import * as React from 'react';
import { hentGeografiskTilknytning } from '../../api/api';
import { GeografiskTilknytning } from '../../datatyper/geografiskTilknytning';
import DataFetcher from '../../utils/dataFetcher';

export const initalStateGeografiskTilknyting: GeografiskTilknytning = {
    geografiskTilknytning: '',
};

export const GeografiskTilknytningContext = React.createContext<GeografiskTilknytning>(initalStateGeografiskTilknyting);

interface GeografiskTilknytningProps {
    children: React.ReactNode;
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
    );
}

export default GeografiskTilknytningProvider;