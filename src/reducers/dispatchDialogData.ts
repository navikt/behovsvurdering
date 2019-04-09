import {FetchActionTypes, FetchDispatch} from "./fetchReducer";
import {DialogData, NyDialogMeldingData} from "../api/dataTypes";
import {postDialog} from "../api/api";

// This do not change after first time
const overskrift = 'Ditt behov for veiledning';

export function dispatchDialogData(tekst: string, dispatch: FetchDispatch): Promise<DialogData> {
    dispatch({type: FetchActionTypes.LOADING});
    const data: NyDialogMeldingData = {tekst, overskrift};
    return postDialog(data)
        .then(res => {
            dispatch({type: FetchActionTypes.OK});
            return res
        })
        .catch((reason) => {
            dispatch({type: FetchActionTypes.FAILURE});
            throw new Error(reason);
        })
}