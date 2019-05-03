import React, { useReducer } from 'react';
import { PagesProps } from '../PagesTypes';
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/NeiOppsummering';
import { PAGE_ID as VEILEDNING_PAGE_ID } from '../hvilken-veiledning-trenger-du/HvilkenVeiledningTrengerDu';
import { initialFetchState, reducer } from '../../reducers/fetchReducer';
import InputView, { KANSKJE, NEI, SPORSMAL } from './InputView';
import { dispatchDialogData } from '../../reducers/dispatchDialogData';
import InfoView from './InfoView';
import { dispatchBesvarelse } from '../../reducers/dispatchBehovsvurderingData';

export const PAGE_ID = 'kontakte-en-nav-veileder';

function getNextPage(value: string) {
    if (value === NEI || value === KANSKJE) {
        return OPPSUMMERING_PAGE_ID;
    } else {
        return VEILEDNING_PAGE_ID;
    }
}

function OnskerDuAKontakteEnNavVeileder(props: PagesProps) {
    const [fetchDialogState, fetchDialogDispatch] = useReducer(reducer, initialFetchState);
    const [fetchBesvarelseState, fetchBesvarelseDispatch] = useReducer(reducer, initialFetchState);

    const onSubmit = (val: string) => {
        const dialogInputData = {svar: val, spm: SPORSMAL};
        const besvarelseInputData = {svar: val, spm: SPORSMAL, besvarelseId: props.state.besvarelseId, spmId: PAGE_ID};

        dispatchDialogData(dialogInputData, fetchDialogDispatch)
            .then((res) => props.setState({dialogId: res.id}))
            .then(() => dispatchBesvarelse(besvarelseInputData, fetchBesvarelseDispatch))
            .then((res) => props.setState({besvarelseId: res.besvarelseId, pageId: getNextPage(val)}));

    };

    return (
        <>
            <InfoView/>
            <InputView disabled={fetchDialogState.loading || fetchBesvarelseState.loading} onSubmit={onSubmit}/>
        </>
    );
}

export default OnskerDuAKontakteEnNavVeileder;