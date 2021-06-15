import { fetchData } from './fetchData';
import { BesvarelseData, DialogData, NyDialogMeldingData, SvarData } from './dataTypes';
import { APP_NAME } from '../utils/constants';

export const API_VEILARBDIALOG = '/proxy/veilarbdialog/api/dialog';
export const API_VEILARBVEDTAKINFO = '/proxy/veilarbvedtakinfo/api/behovsvurdering/svar';
export const API_VEILARBREGISTRERING = '/proxy/veilarbregistrering/api/registrering';
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

const CONFIG = {
	credentials: 'same-origin' as RequestCredentials,
	headers: getHeaders()
};

export function postDialog(data: NyDialogMeldingData): Promise<DialogData> {
	return fetchData<DialogData>(API_VEILARBDIALOG, {
		method: 'post',
		body: JSON.stringify(data),
		...CONFIG
	});
}

export function postBesvarelse(data: SvarData): Promise<BesvarelseData> {
	return fetchData<BesvarelseData>(API_VEILARBVEDTAKINFO, {
		method: 'post',
		body: JSON.stringify(data),
		...CONFIG
	});
}

interface Registrering {
	profilering: { innsatsgruppe: string };
}
interface RegistreringsData {
	registrering: Registrering;
}

export interface UnderOppfolgingData {
	underOppfolging: boolean;
}

export function hentRegistreringData(): Promise<RegistreringsData> {
	return fetchData<RegistreringsData>(API_VEILARBREGISTRERING, CONFIG).then(
		(registeringsData: RegistreringsData) => ({
			registrering: registeringsData.registrering
		})
	);
}

export function hentUnderOppfolging(): Promise<UnderOppfolgingData> {
	return fetchData<UnderOppfolgingData>(API_VEILARBOPPFOLGING_UNDER_OPPFOLGING, CONFIG);
}

declare global {
	interface Window {
		INNSATSGRUPPE: string;
	}
}

export function settWindowInnsatsGruppe(registrering: Registrering) {
	window.INNSATSGRUPPE = registrering.profilering.innsatsgruppe;
}

export function hentWindowInnsatsGruppe() {
	return window.INNSATSGRUPPE;
}
