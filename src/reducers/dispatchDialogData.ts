import { FetchActionTypes, FetchDispatch } from './fetchReducer';
import { DialogData, NyDialogMeldingData } from '../api/dataTypes';
import { postDialog } from '../api/api';

// This do not change after first time
const overskrift = 'Behovet mitt for veiledning';

interface InputData {
    spm: string;
    svar: string;
    dialogId?: string;
}

export function dispatchDialogData(inputData: InputData, dispatch: FetchDispatch): Promise<DialogData> {
    dispatch({type: FetchActionTypes.LOADING});
    const tekst = `Spørsmål fra NAV: ${inputData.spm}\n Svaret mitt: ${inputData.svar}`;
    const data: NyDialogMeldingData = {tekst, overskrift, dialogId: inputData.dialogId};
    return postDialog(data)
        .then(res => {
            dispatch({type: FetchActionTypes.OK});
            return res;
        })
        .catch((reason) => {
            dispatch({type: FetchActionTypes.FAILURE});
            return Promise.reject(reason);
        });
}
