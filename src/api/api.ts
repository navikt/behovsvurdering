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

export function hentRegistreringData(): Promise<any> { // tslint:disable-line
    return fetchData<any>(API_VEILARBREGISTRERING, CONFIG) // tslint:disable-line
        .then((registeringsData: any) => ({ // tslint:disable-line
            registrering: registeringsData.registrering
        }));
}

export const INNSATSGRUPPE = 'INNSATSGRUPPE';
export function settSessionInnsatsGruppe(registrering: any) { // tslint:disable-line
    window.sessionStorage.setItem(INNSATSGRUPPE, registrering.profilering.innsatsgruppe);
}

export function hentSessionInnsatsGruppe() { // tslint:disable-line
    return window.sessionStorage.getItem(INNSATSGRUPPE);
}

export function fjernSessionInnsatsGruppe() { // tslint:disable-line
    return window.sessionStorage.removeItem(INNSATSGRUPPE);
}