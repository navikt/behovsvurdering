import { Reducer } from 'redux';
import {SisteStillingActions, SisteStillingTypes} from "./sisteStillingActions";

export interface SisteStillingState {
    sisteStilling : {
        label: string,
        konseptId: number,
        styrk08: string,
    },
}

const initialState: SisteStillingState = {
    sisteStilling : {
        label: "",
        konseptId: 0,
        styrk08: "",
    },
};

const stillingReducer: Reducer<SisteStillingState, SisteStillingActions> = (state = initialState, action) => {
    switch (action.type) {
        case SisteStillingTypes.HENT_SISTE_STILLING_OK: {
            return action.data;
        }
        default :
            return state;
    }

};

export default stillingReducer;