import { useReducer } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { initialFetchState, reducer } from '../../reducers/fetchReducer';
import { PagesProps } from '../PagesTypes';
import View, { SPORSMAL } from './View';
import { dispatchDialogData } from '../../reducers/dispatchDialogData';
import { dispatchBesvarelse } from '../../reducers/dispatchBehovsvurderingData';
import Feilmelding from '../../components/feilmelding/feilmelding';

export const PAGE_ID = 'hvilken-veiledning-trengs';
export const JA_PAGE_ID = 'ja_oppsummering';

function HvilkenVeiledningTrengerDu(props: PagesProps & RouteComponentProps) {
	const [fetchDialogState, fetchDialogDispatch] = useReducer(reducer, initialFetchState);
	const [fetchBesvarelseState, fetchBesvarelseDispatch] = useReducer(reducer, initialFetchState);

	const onSubmit = (val: string) => {
		const dialogInputData = {
			svar: val,
			spm: SPORSMAL,
			dialogId: props.state.dialogId
		};
		const besvarelseInputData = {
			svar: val,
			spm: SPORSMAL,
			besvarelseId: props.state.besvarelseId,
			spmId: PAGE_ID
		};

		dispatchDialogData(dialogInputData, fetchDialogDispatch).then(dialogRes => {
			dispatchBesvarelse(besvarelseInputData, fetchBesvarelseDispatch).then(bvRes => {
				props.setState({
					dialogId: dialogRes.id,
					besvarelseId: bvRes.besvarelseId
				});
				props.history.push(`/${JA_PAGE_ID}`);
			});
		});
	};

	if (fetchDialogState.failure || fetchBesvarelseState.failure) {
		return <Feilmelding />;
	}

	return <View onSubmit={onSubmit} disabled={fetchDialogState.loading || fetchBesvarelseState.loading} />;
}

export default withRouter(HvilkenVeiledningTrengerDu);
