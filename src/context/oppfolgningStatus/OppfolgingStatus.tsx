import * as React from 'react';
import { hentOppfolgingStatus, OppfolgingStatusType } from '../../api/api';
import DataFetcher from '../../utils/dataFetcher';
import AlertStripe from 'nav-frontend-alertstriper';

interface OppfolgingStatusProps {
    children: React.ReactNode;
}

function OppfolgingStatus(props: OppfolgingStatusProps) {
    return (
        <DataFetcher<OppfolgingStatusType> fetchFunc={hentOppfolgingStatus}>
            {(data: OppfolgingStatusType) => {
                if (!data.underOppfolging) {
                    return (
                        <div id="ikke-under-oppfolgning-container">
                            <AlertStripe type="info" className="ikke-under-oppfolgning-boks">
                                Du er ikke under arbeidsrettet oppfølgning.
                            </AlertStripe>
                        </div>
                    );
                }
                return props.children;
            }}
        </DataFetcher>
    );
}

export default OppfolgingStatus;