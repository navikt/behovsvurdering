import React, {useReducer, useState} from 'react';
import {Undertittel} from 'nav-frontend-typografi';
import {RadioPanelGruppe} from 'nav-frontend-skjema';
import {Hovedknapp} from 'nav-frontend-knapper';
import {PagesProps, SetStateFunc} from './PagesTypes';
import {PAGE_ID as OPPSUMERING_PAGE_ID} from './Oppsumering';
import {PAGE_ID as VEILEDNING_PAGE_ID} from './HvilkenVeiledningTrengerDu';
import {postDialog} from '../api/api';
import {NyDialogMeldingData} from '../api/dataTypes';
import {FetchActionTypes, FetchDispatch, initialFetchState, reducer} from "../utils/fetchReducer";

export const PAGE_ID = 'kontakte-en-nav-veileder';

const NEI = 'Nei';
const KANSKJE = 'Kanskje senere';
const JA = 'Ja';
const USIKKER = 'Usikker';


function sendValue(value: string, dialogId: string, setPageState: SetStateFunc) {
    if (value === NEI || value === KANSKJE) {
        setPageState({pageId: OPPSUMERING_PAGE_ID, dialogId: dialogId});
    } else {
        setPageState({pageId: VEILEDNING_PAGE_ID, dialogId: dialogId});
    }
}


function sendData(value: string, dispatch: FetchDispatch, setPageState: SetStateFunc) {
    dispatch({type: FetchActionTypes.LOADING});
    const data: NyDialogMeldingData = {tekst: value, overskrift: 'Ditt behov for veiledning'};
    return postDialog(data)
        .then(res => {
                dispatch({type: FetchActionTypes.OK});
                sendValue(value, res.id, setPageState);
            }
        )
        .catch((reason) => {
            dispatch({type: FetchActionTypes.FAILURE});
            return Promise.reject(reason)
        })
}

const initRadioState: string | undefined = undefined;

function OnskerDuAKontakteEnNavVeileder(props: PagesProps) {
    const [value, setValue] = useState(initRadioState);
    const [fetchState, fetchDispatch] = useReducer(reducer, initialFetchState);

    return (
        <div>
            <div>Mer innhold vil komme her</div>
            <div className="gray-background">
                <div className="spm">
                    <Undertittel className="spm-row">
                        Ønsker du å kontakte en NAV-veileder for å få hjelp til å komme i jobb?
                    </Undertittel>
                    <div className="spm-row">
                        <RadioPanelGruppe
                            className="spm-row"
                            legend=""
                            name=""
                            radios={[
                                {label: NEI, disabled: fetchState.loading, value: NEI},
                                {label: KANSKJE, disabled: fetchState.loading, value: KANSKJE},
                                {label: JA, disabled: fetchState.loading, value: JA},
                                {label: USIKKER, disabled: fetchState.loading, value: USIKKER},
                            ]}
                            checked={value}
                            onChange={(_, val) => setValue(val)}
                            // feil={{feilmelding: null}}
                        />
                    </div>
                    <Hovedknapp spinner={fetchState.loading}
                                disabled={fetchState.loading}
                                onClick={() => sendData(value!, fetchDispatch, props.setState)}>
                        Send</Hovedknapp>
                </div>
            </div>
        </div>
    );
}

export default OnskerDuAKontakteEnNavVeileder;