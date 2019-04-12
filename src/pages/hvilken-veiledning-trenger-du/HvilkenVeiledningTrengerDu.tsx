import React, { useReducer } from 'react';
import { initialFetchState, reducer } from '../../reducers/fetchReducer';
import { PagesProps } from '../PagesTypes';
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/JaOppsummering';
import View from './View';
import { dispatchDialogData } from '../../reducers/dispatchDialogData';

export const PAGE_ID = 'veiledning';

function HvilkenVeiledningTrengerDu(props: PagesProps) {
    const [fetchState, fetchDispatch] = useReducer(reducer, initialFetchState);
    const onSubmit = (val: string) => {
        dispatchDialogData(val, fetchDispatch).then(() => {
            props.setState({pageId: OPPSUMMERING_PAGE_ID});
        });
    };

    return (
        <View onSubmit={onSubmit} disabled={fetchState.loading}/>
    );
}

export default HvilkenVeiledningTrengerDu;