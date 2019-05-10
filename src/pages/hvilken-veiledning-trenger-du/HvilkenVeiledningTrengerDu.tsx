import React, { useReducer } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { initialFetchState, reducer } from '../../reducers/fetchReducer';
import { PagesProps } from '../PagesTypes';
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/JaOppsummering';
import View, { SPORSMAL } from './View';
import { dispatchDialogData } from '../../reducers/dispatchDialogData';
import { hvilkenVeiledningSendtMetrikk } from '../../metrikker/frontendlogger';
import { dispatchBesvarelse } from '../../reducers/dispatchBehovsvurderingData';

export const PAGE_ID = 'hvilken-veiledning-trengs';

function HvilkenVeiledningTrengerDu(props: PagesProps & RouteComponentProps) {
    const [fetchDialogState, fetchDialogDispatch] = useReducer(reducer, initialFetchState);
    const [fetchBesvarelseState, fetchBesvarelseDispatch] = useReducer(reducer, initialFetchState);

    const onSubmit = (val: string) => {
        const dialogInputData = {svar: val, spm: SPORSMAL, dialogId: props.state.dialogId};
        const besvarelseInputData = {svar: val, spm: SPORSMAL, besvarelseId: props.state.besvarelseId, spmId: PAGE_ID};

        dispatchDialogData(dialogInputData, fetchDialogDispatch)
            .then((dialogRes) => {
                    dispatchBesvarelse(besvarelseInputData, fetchBesvarelseDispatch)
                        .then((bvRes) => {
                            props.setState({
                                dialogId: dialogRes.id,
                                besvarelseId: bvRes.besvarelseId,
                            });
                            props.history.push(`/${OPPSUMMERING_PAGE_ID}`);
                        });
                }
            );

        hvilkenVeiledningSendtMetrikk();
    };

    return (
        <View onSubmit={onSubmit} disabled={fetchDialogState.loading || fetchBesvarelseState.loading}/>
    );
}

export default withRouter(HvilkenVeiledningTrengerDu);
