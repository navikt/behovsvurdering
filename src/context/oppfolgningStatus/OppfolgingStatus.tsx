import * as React from 'react';
import { hentOppfolgingStatus, OppfolgingStatusType } from '../../api/api';
import DataFetcher from '../../utils/dataFetcher';

interface OppfolgingStatusProps {
    children: React.ReactNode;
}

function OppfolgingStatus(props: OppfolgingStatusProps) {
    return (
        <DataFetcher<OppfolgingStatusType> fetchFunc={hentOppfolgingStatus}>
            {(data: OppfolgingStatusType) => {
                if (!data.underOppfolging) {
                    return <div/>;
                }
                return props.children;
            }}
        </DataFetcher>
    );
}

export default OppfolgingStatus;