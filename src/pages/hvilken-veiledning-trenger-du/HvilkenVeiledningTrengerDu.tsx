import React, { useReducer } from 'react';
import { initialFetchState, reducer } from '../../reducers/fetchReducer';
import { PagesProps } from '../PagesTypes';
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/JaOppsummering';
import View, { SPORSMAL } from './View';
import { dispatchDialogData } from '../../reducers/dispatchDialogData';
import Feilmelding from '../../components/feilmelding/feilmelding';

export const PAGE_ID = 'veiledning';

function HvilkenVeiledningTrengerDu(props: PagesProps) {
    const [fetchState, fetchDispatch] = useReducer(reducer, initialFetchState);
    const onSubmit = (val: string) => {
        const inputData = {svar: val, spm: SPORSMAL, dialogId: props.state.dialogId};
        dispatchDialogData(inputData, fetchDispatch).then((res) => {
            props.setState({pageId: OPPSUMMERING_PAGE_ID, dialogId: res.id});
        });
    };
    
    if (fetchState.failure) {
        return <Feilmelding/>;
    }

    return (
        <View onSubmit={onSubmit} disabled={fetchState.loading}/>
    );
}

export default HvilkenVeiledningTrengerDu;