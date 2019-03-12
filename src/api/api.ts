import { fetchData } from '../utils/fetchData';
import { GeografiskTilknytning } from '../datatyper/geografiskTilknytning';
import { KommuneOgLedigeStillinger } from '../datatyper/kommuneOgLedigeStillinger';
import SisteStillingType, { RegistreringDataType } from '../datatyper/sisteStillingFraRegistrering';

export const API_VEILARBREGISTRERING = '/veilarbregistrering/api/registrering';
export const API_VEILARBOPPFOLGING = '/veilarboppfolging/api/oppfolging';
export const API_VEILARBPERSON = '/veilarbperson/api/person/geografisktilknytning';
export const API_VEILARBDIALOG = '/veilarbdialog/api/dialog';
export const API_MIA = 'https://mia.nav.no/rest/behovsvurdering/stillingerifylke';

export interface OppfolgingStatusType {
    underOppfolging: boolean;
}

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

export function hentSisteStilling(errorHandler: (response?: Response) => Promise<SisteStillingType>): Promise<SisteStillingType> {
    return fetchData<RegistreringDataType>(API_VEILARBREGISTRERING, CONFIG)
        .then((registeringsData: RegistreringDataType) => ({sisteStilling: registeringsData.registrering.sisteStilling}));
}

export function hentOppfolgingStatus(): Promise<OppfolgingStatusType> {
    return fetchData<OppfolgingStatusType>(API_VEILARBOPPFOLGING, CONFIG)
        .then((oppfolgingStatus: OppfolgingStatusType) => ({underOppfolging: oppfolgingStatus.underOppfolging}));
}

export function hentKommuneOgStillinger([kommunnenummer, styrkkode]: string[], errorHandler: (response?: Response) => Promise<KommuneOgLedigeStillinger>): Promise<KommuneOgLedigeStillinger> {
    return fetchData<KommuneOgLedigeStillinger>(`${API_MIA}?kommunennummer=${kommunnenummer}&styrkkode=${styrkkode}`, CONFIG);
}

export function hentGeografiskTilknytning(): Promise<GeografiskTilknytning> {
    return fetchData<GeografiskTilknytning>(API_VEILARBPERSON, CONFIG);
}

export function postDialog(data: any): Promise<void> { // tslint:disable-line
    return fetchData<void>(API_VEILARBDIALOG, {method: 'post', body: JSON.stringify(data), ...CONFIG});
}