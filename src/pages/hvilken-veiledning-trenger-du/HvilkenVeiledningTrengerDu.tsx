import React, { useReducer } from 'react';
import { initialFetchState, reducer } from '../../reducers/fetchReducer';
import { PagesProps } from '../PagesTypes';
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/JaOppsummering';
import View, { SPORSMAL } from './View';
import { dispatchDialogData } from '../../reducers/dispatchDialogData';
import { hvilkenVeiledningSendtMetrikk } from '../../metrikker/frontendlogger';
import { dispatchBesvarelse } from '../../reducers/dispatchBehovsvurderingData';

export const PAGE_ID = 'veiledning';

function HvilkenVeiledningTrengerDu(props: PagesProps) {
    const [fetchDialogState, fetchDialogDispatch] = useReducer(reducer, initialFetchState);
    const [fetchBesvarelseState, fetchBesvarelseDispatch] = useReducer(reducer, initialFetchState);

    const onSubmit = (val: string) => {
        const dialogInputData = {svar: val, spm: SPORSMAL, dialogId: props.state.dialogId};
        const besvarelseInputData = {svar: val, spm: SPORSMAL, besvarelseId: props.state.besvarelseId, spmId: PAGE_ID};

        dispatchDialogData(dialogInputData, fetchDialogDispatch)
            .then((res) => props.setState({dialogId: res.id}))
            .then(() => dispatchBesvarelse(besvarelseInputData, fetchBesvarelseDispatch))
            .then((res) => props.setState({besvarelseId: res.besvarelseId, pageId: OPPSUMMERING_PAGE_ID}));

        hvilkenVeiledningSendtMetrikk();
    };

    return (
        <View onSubmit={onSubmit} disabled={fetchDialogState.loading || fetchBesvarelseState.loading}/>
    );
}

export default HvilkenVeiledningTrengerDu;
