import { fetchData } from '../utils/fetchData';
export const API_VEILARBOPPFOLGING = '/veilarboppfolging/api/oppfolging';
export const API_VEILARBDIALOG = '/veilarbdialog/api/dialog';

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


export function hentOppfolgingStatus(): Promise<OppfolgingStatusType> {
    return fetchData<OppfolgingStatusType>(API_VEILARBOPPFOLGING, CONFIG)
        .then((oppfolgingStatus: OppfolgingStatusType) => ({underOppfolging: oppfolgingStatus.underOppfolging}))
        .catch(() => ({underOppfolging: false}));
}

export function postDialog(data: any): Promise<void> { // tslint:disable-line
    return fetchData<void>(API_VEILARBDIALOG, {method: 'post', body: JSON.stringify(data), ...CONFIG});
}