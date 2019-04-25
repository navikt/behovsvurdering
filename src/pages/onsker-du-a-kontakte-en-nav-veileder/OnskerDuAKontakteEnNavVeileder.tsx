import React, { useReducer } from 'react';
import { PagesProps, SetStateFunc } from '../PagesTypes';
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/NeiOppsummering';
import { PAGE_ID as VEILEDNING_PAGE_ID } from '../hvilken-veiledning-trenger-du/HvilkenVeiledningTrengerDu';
import { initialFetchState, reducer } from '../../reducers/fetchReducer';
import InputView, { KANSKJE, NEI, SPORSMAL } from './InputView';
import { dispatchDialogData } from '../../reducers/dispatchDialogData';
import InfoView from './InfoView';
import Feilmelding from '../../components/feilmelding/feilmelding';

export const PAGE_ID = 'kontakte-en-nav-veileder';

function changeStateBasedOnValue(value: string, dialogId: string, setPageState: SetStateFunc) {
    if (value === NEI || value === KANSKJE) {
        setPageState({pageId: OPPSUMMERING_PAGE_ID, dialogId: dialogId});
    } else {
        setPageState({pageId: VEILEDNING_PAGE_ID, dialogId: dialogId});
    }
}

function OnskerDuAKontakteEnNavVeileder(props: PagesProps) {
    const [fetchState, fetchDispatch] = useReducer(reducer, initialFetchState);
    const onSubmit = (value: string) => {
        const inputData = {svar: value, spm: SPORSMAL};
        dispatchDialogData(inputData, fetchDispatch).then((res) => {
            changeStateBasedOnValue(value, res.id, props.setState);
        });
    };

    if (fetchState.failure) {
        return <Feilmelding/>;
    }

    return (
        <>
            <InfoView/>
            <InputView disabled={fetchState.loading} onSubmit={onSubmit}/>
        </>
    );
}

export default OnskerDuAKontakteEnNavVeileder;