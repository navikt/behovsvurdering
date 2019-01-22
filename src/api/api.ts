import {fetchData} from "../utils/fetchData";
import SisteStillingType from "../datatyper/sisteStillingFraRegistrering";
import BoligInformasjonType from "../datatyper/boligInformasjon";

const API_VEILARBREGISTRERING = "/veilarbregistrering/api/registrering";
const API_VEILARBOPPFOLGING = "/veilarboppfolging/api/oppfolging";
const API_VEILARBPERSON = "veilarbperson/api/person/boliginformasjon";


export interface OppfolgingStatusType {
    underOppfolging: boolean;
}


export function hentSisteStilling(): Promise<SisteStillingType> {
    return fetchData<SisteStillingType>(API_VEILARBREGISTRERING);
}

export function hentOppfolgingStatus(): Promise<OppfolgingStatusType> {
    return fetchData<OppfolgingStatusType>(API_VEILARBOPPFOLGING);
}

export function hentBoligInformasjon(): Promise<BoligInformasjonType> {
    return fetchData<BoligInformasjonType>(API_VEILARBOPPFOLGING);
}