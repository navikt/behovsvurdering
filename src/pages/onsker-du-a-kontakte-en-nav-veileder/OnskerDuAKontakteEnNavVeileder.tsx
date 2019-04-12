import React, {useReducer} from 'react';
import {PagesProps, SetStateFunc} from '../PagesTypes';
import {PAGE_ID as OPPSUMERING_PAGE_ID} from '../oppsummerring/NeiOppsumering';
import {PAGE_ID as VEILEDNING_PAGE_ID} from '../hvilken-veiledning-trenger-du/HvilkenVeiledningTrengerDu';
import {initialFetchState, reducer} from '../../reducers/fetchReducer';
import InputView, {KANSKJE, NEI} from './InputView';
import {dispatchDialogData} from '../../reducers/dispatchDialogData';
import InfoView from './InfoView';

export const PAGE_ID = 'kontakte-en-nav-veileder';

function changeStateBasedOnValue(value: string, dialogId: string, setPageState: SetStateFunc) {
    if (value === NEI || value === KANSKJE) {
        setPageState({pageId: OPPSUMERING_PAGE_ID, dialogId: dialogId});
    } else {
        setPageState({pageId: VEILEDNING_PAGE_ID, dialogId: dialogId});
    }
}

function OnskerDuAKontakteEnNavVeileder(props: PagesProps) {
    const [fetchState, fetchDispatch] = useReducer(reducer, initialFetchState);
    const onSubmit = (value: string) => {
        dispatchDialogData(value, fetchDispatch).then((res) => {
            changeStateBasedOnValue(value, res.id, props.setState);
        });
    };

    return (
        <>
            <InfoView/>
            <InputView disabled={fetchState.loading} onSubmit={onSubmit}/>
        </>
    );
}

export default OnskerDuAKontakteEnNavVeileder;