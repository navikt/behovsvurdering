import React, {useReducer, useState} from 'react';
import {Undertittel} from "nav-frontend-typografi";
import {Textarea} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";
import {FetchActionTypes, FetchDispatch, initialFetchState, reducer} from "../utils/fetchReducer";
import {PagesProps} from "./PagesTypes";
import {NyDialogMeldingData} from "../api/dataTypes";
import {postDialog} from "../api/api";
import {PAGE_ID as OPPSUMERING_PAGE_ID} from "./Oppsumering";

export const PAGE_ID = 'veiledning';


function sendData(value: string, dispatch: FetchDispatch, pagesProps: PagesProps) {
    dispatch({type: FetchActionTypes.LOADING});
    const data: NyDialogMeldingData = {tekst: value, dialogId: pagesProps.state.dialogId};
    return postDialog(data)
        .then(_ => {
                dispatch({type: FetchActionTypes.OK});
                pagesProps.setState({pageId: OPPSUMERING_PAGE_ID});
            }
        )
        .catch((reason) => {
            dispatch({type: FetchActionTypes.FAILURE});
            return Promise.reject(reason)
        })
}

const initState: string = '';

function HvilkenVeiledningTrengerDu(props: PagesProps) {
    const [value, setValue] = useState(initState);
    const [fetchState, fetchDispatch] = useReducer(reducer, initialFetchState);

    return (
        <div className="spm">
            <Undertittel className="spm-row">
                Hvilken veiledning trenger du fra NAV for å komme i jobb?
            </Undertittel>
            <div className="spm-row">
                <ul>
                    <li>Er det lett eller vanskelig for deg å komme i jobb?</li>
                    <li>Hva slags jobb du ser for deg i fremtiden?</li>
                    <li>Hva påvirker mulighetene dine for jobb?</li>
                    <li>Hva må til for at du skal komme i jobb?</li>
                </ul>
            </div>
            <div className="spm-row">
            <Textarea
                placeholder="Skriv til din veileder her"
                textareaClass="spm-text-area"
                label={false}
                tellerTekst={() => false}
                value={value}
                disabled={fetchState.loading}
                onChange={(e) => setValue((e.target as HTMLInputElement).value)}
            />
            </div>
            <Hovedknapp
                spinner={fetchState.loading}
                disabled={fetchState.loading}
                onClick={() => sendData(value, fetchDispatch, props)}>
                Send
            </Hovedknapp>
        </div>
    );
}

export default HvilkenVeiledningTrengerDu;