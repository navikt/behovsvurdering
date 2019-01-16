import {SisteStillingState} from "./sisteStillingReducer";
import {fetchData} from "../../utils/fetchData";

export enum SisteStillingTypes {
    HENT_SISTE_STILLING_PENDING = 'HENT_SISTE_STILLING_PENDING',
    HENT_SISTE_STILLING_OK = 'HENT_SISTE_STILLING_OK',
}


function hentSisteStillingActionOk (data: SisteStillingState):  HentSisteStillingActionOk {
    return {
        type: SisteStillingTypes.HENT_SISTE_STILLING_OK,
        data
    }
}

//fixs this
export const hentSisteStilling = () => {
    return (dispatch: any ) => {
        return fetchData<SisteStillingState>("/veilarbregistrering/api/registrering")
            .then(jsonData => dispatch(hentSisteStillingActionOk(jsonData)))
    }
};

export interface HentSisteStillingActionOk {
    type: SisteStillingTypes.HENT_SISTE_STILLING_OK,
    data: SisteStillingState;
};


export type SisteStillingActions =
    HentSisteStillingActionOk ;
