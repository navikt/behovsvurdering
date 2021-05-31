import { FetchActionTypes, FetchDispatch } from './fetchReducer';
import { BesvarelseData, SvarData } from '../api/dataTypes';
import { postBesvarelse } from '../api/api';

interface InputData {
	spm: string;
	spmId: string;
	svar: string;
	besvarelseId?: number;
}

export function dispatchBesvarelse(inputData: InputData, dispatch: FetchDispatch): Promise<BesvarelseData> {
	dispatch({ type: FetchActionTypes.LOADING });
	const data: SvarData = {
		spmId: inputData.spmId,
		spm: inputData.spm,
		svar: inputData.svar,
		besvarelseId: inputData.besvarelseId
	};
	return postBesvarelse(data)
		.then(res => {
			dispatch({ type: FetchActionTypes.OK });
			return res;
		})
		.catch(reason => {
			dispatch({ type: FetchActionTypes.FAILURE });
			return Promise.reject(reason);
		});
}
