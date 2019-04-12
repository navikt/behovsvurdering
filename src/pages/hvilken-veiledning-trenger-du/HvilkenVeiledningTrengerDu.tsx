import React, { useReducer } from 'react';
import { initialFetchState, reducer } from '../../reducers/fetchReducer';
import { PagesProps } from '../PagesTypes';
import { PAGE_ID as OPPSUMERING_PAGE_ID } from '../oppsummerring/JaOppsumering';
import View from './View';
import { dispatchDialogData } from '../../reducers/dispatchDialogData';

export const PAGE_ID = 'veiledning';

function HvilkenVeiledningTrengerDu(props: PagesProps) {
    const [fetchState, fetchDispatch] = useReducer(reducer, initialFetchState);
    const onSubmit = (val: string) => {
        dispatchDialogData(val, fetchDispatch).then(() => {
            props.setState({pageId: OPPSUMERING_PAGE_ID});
        });
    };

    return (
        <View onSubmit={onSubmit} disabled={fetchState.loading}/>
    );
}

export default HvilkenVeiledningTrengerDu;