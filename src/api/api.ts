import { fetchData } from "../utils/fetchData";
import { GeografiskTilknytning } from "../datatyper/geografiskTilknytning";
import { KommuneOgLedigeStillinger } from "../datatyper/kommuneOgLedigeStillinger";
import SisteStillingType, { RegistreringDataType } from "../datatyper/sisteStillingFraRegistrering";
export const API_VEILARBREGISTRERING = "/veilarbregistrering/api/registrering";
export const API_VEILARBOPPFOLGING = "/veilarboppfolging/api/oppfolging";
export const API_VEILARBPERSON = "/veilarbperson/api/person/geografisktilknytning";
export const API_MIA = "/mia/api/";


export interface OppfolgingStatusType {
    underOppfolging: boolean;
}

export function hentSisteStilling(errorHandler:(response?: Response) => Promise<SisteStillingType>): Promise<SisteStillingType> {
    return fetchData<RegistreringDataType>(API_VEILARBREGISTRERING)
        .then((registeringsData: RegistreringDataType) => ({sisteStilling: registeringsData.registrering.sisteStilling}));
}

export function hentOppfolgingStatus():Promise<OppfolgingStatusType> {
    return fetchData<OppfolgingStatusType>(API_VEILARBOPPFOLGING).then((oppfolgingStatus: OppfolgingStatusType) => ({underOppfolging: oppfolgingStatus.underOppfolging}));
}

export function hentKommuneOgStillinger([kommunnenummer,styrkkode]: string[], errorHandler:(response?: Response) => Promise<KommuneOgLedigeStillinger>): Promise<KommuneOgLedigeStillinger>{
    return fetchData<KommuneOgLedigeStillinger>(`${API_MIA}?kommunennummer=${kommunnenummer}&styrkkode=${styrkkode}`, errorHandler)
}

export function hentGeografiskTilknytning(): Promise<GeografiskTilknytning> {
    return fetchData<GeografiskTilknytning>(API_VEILARBPERSON);
}