import { fetchData } from './fetchData';
import { BesvarelseData, DialogData, NyDialogMeldingData, SvarData } from './dataTypes';

export const API_VEILARBDIALOG = '/veilarbdialog/api/dialog';
export const API_VEILARBVEDTAKINFO = '/veilarbvedtakinfo/api/behovsvurdering/svar';
export const API_VEILARBREGISTRERING = '/veilarbregistrering/api/registrering';

function getCookie(name: string) {
    const re = new RegExp(`${name}=([^;]+)`);
    const match = re.exec(document.cookie);
    return match !== null ? match[1] : '';
}

function getHeaders() {
    return new Headers({
        'Content-Type': 'application/json',
        'NAV_CSRF_PROTECTION': getCookie('NAV_CSRF_PROTECTION'), // eslint-disable-line quote-props
    });
}

const CONFIG = {
    credentials: ('same-origin' as RequestCredentials),
    headers: getHeaders(),
};

export function postDialog(data: NyDialogMeldingData): Promise<DialogData> {
    return fetchData<DialogData>(API_VEILARBDIALOG, {method: 'post', body: JSON.stringify(data), ...CONFIG});
}

export function postBesvarelse(data: SvarData): Promise<BesvarelseData> {
    return fetchData<BesvarelseData>(API_VEILARBVEDTAKINFO, {method: 'post', body: JSON.stringify(data), ...CONFIG});
}

interface Registrering { profilering: { innsatsgruppe: string }; }
interface RegistreringsData { registrering: Registrering; }

export function hentRegistreringData(): Promise<RegistreringsData> {
    return fetchData<RegistreringsData>(API_VEILARBREGISTRERING, CONFIG)
        .then((registeringsData: RegistreringsData) => ({
            registrering: registeringsData.registrering
        }));
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