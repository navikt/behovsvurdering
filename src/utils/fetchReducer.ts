export enum FetchActionTypes {
    LOADING,
    FAILURE,
    OK
}

interface FetchState {
    loading: boolean;
    failure: boolean;
}

export interface FetchAction {
    type: FetchActionTypes;
}

export const initialFetchState = {
    loading: false,
    failure: false,
};

export const reducer = (state: FetchState, action: FetchAction) => {
    switch (action.type) {
        case FetchActionTypes.LOADING:
            return {...state, loading: true, failure: false};
        case FetchActionTypes.OK:
            return {...state, loading: false, failure: false};
        case FetchActionTypes.FAILURE:
            return {...state, loading: false, failure: true};
        default:
            throw new Error('unknown fetch action');
    }
};

export type FetchDispatch = (action: FetchAction) => void;