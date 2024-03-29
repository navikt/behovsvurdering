import { useReducer } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PagesProps } from '../PagesTypes';
import { PAGE_ID as VEILEDNING_PAGE_ID } from '../hvilken-veiledning-trenger-du/HvilkenVeiledningTrengerDu';
import { initialFetchState, reducer } from '../../reducers/fetchReducer';
import InputView, { KANSKJE, NEI, SPORSMAL } from './InputView';
import { dispatchDialogData } from '../../reducers/dispatchDialogData';
import InfoView from './InfoView';
import { dispatchBesvarelse } from '../../reducers/dispatchBehovsvurderingData';
import Feilmelding from '../../components/feilmelding/feilmelding';

export const PAGE_ID = 'kontakt-fra-nav-veileder';
export const NEI_PAGE_ID = 'nei_oppsummering';

function getNextPage(value: string) {
	if (value === NEI || value === KANSKJE) {
		return NEI_PAGE_ID;
	} else {
		return VEILEDNING_PAGE_ID;
	}
}

function OnskerDuAKontakteEnNavVeileder(props: PagesProps & RouteComponentProps) {
	const [fetchDialogState, fetchDialogDispatch] = useReducer(reducer, initialFetchState);
	const [fetchBesvarelseState, fetchBesvarelseDispatch] = useReducer(reducer, initialFetchState);

	const onSubmit = (val: string) => {
		const dialogInputData = { svar: val, spm: SPORSMAL };
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
				props.history.push(`/${getNextPage(val)}`);
			});
		});
	};

	if (fetchDialogState.failure || fetchBesvarelseState.failure) {
		return <Feilmelding />;
	}

	return (
		<>
			<InfoView />
			<InputView disabled={fetchDialogState.loading || fetchBesvarelseState.loading} onSubmit={onSubmit} />
		</>
	);
}

export default withRouter(OnskerDuAKontakteEnNavVeileder);
