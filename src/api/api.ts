import { fetchData } from './fetchData';
import { BesvarelseData, DialogData, NyDialogMeldingData, SvarData } from './dataTypes';
import { APP_NAME } from '../utils/constants';

export const API_VEILARBDIALOG = '/proxy/veilarbdialog/api/dialog';
export const API_VEILARBVEDTAKINFO = '/proxy/veilarbvedtakinfo/api/behovsvurdering/svar';
export const API_VEILARBOPPFOLGING_UNDER_OPPFOLGING = '/proxy/veilarboppfolging/api/underoppfolging';

function getCookie(name: string) {
	const re = new RegExp(`${name}=([^;]+)`);
	const match = re.exec(document.cookie);
	return match !== null ? match[1] : '';
}

function getHeaders() {
	return new Headers({
		'Content-Type': 'application/json',
		'Nav-Consumer-Id': APP_NAME,
		NAV_CSRF_PROTECTION: getCookie('NAV_CSRF_PROTECTION') // eslint-disable-line quote-props
	});
}

export const FETCH_CONFIG = {
	credentials: 'same-origin' as RequestCredentials,
	headers: getHeaders()
};

export function postDialog(data: NyDialogMeldingData): Promise<DialogData> {
	return fetchData<DialogData>(API_VEILARBDIALOG, {
		method: 'post',
		body: JSON.stringify(data),
		...FETCH_CONFIG
	});
}

export function postBesvarelse(data: SvarData): Promise<BesvarelseData> {
	return fetchData<BesvarelseData>(API_VEILARBVEDTAKINFO, {
		method: 'post',
		body: JSON.stringify(data),
		...FETCH_CONFIG
	});
}

export interface UnderOppfolgingData {
	underOppfolging: boolean;
}
