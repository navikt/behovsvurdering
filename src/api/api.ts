import {fetchData} from "../utils/fetchData";

const API_VEILARBREGISTRERING = "/veilarbregistrering/api/registrering";
const API_VEILARBOPPFOLGING = "/veilarboppfolging/api/oppfolging";

export interface SisteStillingType {
    sisteStilling : {
        label: string,
        konseptId: number,
        styrk08: string,
    },
}

export interface OppfolgingStatusType {
    underOppfolging: boolean;
}


export function hentSisteStilling(): Promise<SisteStillingType> {
    return fetchData<SisteStillingType>(API_VEILARBREGISTRERING);
}

export function hentOppfolgingStatus(): Promise<OppfolgingStatusType> {
    return fetchData<OppfolgingStatusType>(API_VEILARBOPPFOLGING);
}
