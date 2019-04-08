import React, { useState } from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';
import { PagesProps } from './PagesTypes';
import { PAGE_ID as OPPSUMERING_PAGE_ID } from './Oppsumering';

export const PAGE_ID = 'kontakte-en-nav-veileder';

const NEI = 'Nei';
const KANSKJE = 'Kanskje senere';
const JA = 'Ja';
const USIKKER = 'Usikker';

const initRadioState: string = '';

function sendValue(value: string, props: PagesProps) {
    // todo sendData THEN update to next pages
    if (value === NEI || value === KANSKJE) {
        props.setState({pageId: OPPSUMERING_PAGE_ID});
    } else {
        props.setState({pageId: OPPSUMERING_PAGE_ID});
    }
}

function OnskerDuAKontakteEnNavVeileder(props: PagesProps) {
    const [value, setValue] = useState(initRadioState);

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
                                {label: NEI, disabled: false, value: NEI},
                                {label: KANSKJE, disabled: false, value: KANSKJE},
                                {label: JA, disabled: false, value: JA},
                                {label: USIKKER, disabled: false, value: USIKKER},
                            ]}
                            checked={value}
                            onChange={(_, val) => setValue(val)}
                            // feil={{feilmelding: null}}
                        />
                    </div>
                    <Hovedknapp spinner={false}
                                disabled={false}
                                onClick={() => sendValue(value, props)}>
                        Send</Hovedknapp>
                </div>
            </div>
        </div>
    );
}

export default OnskerDuAKontakteEnNavVeileder;