import React, {useState} from 'react';
import {Undertittel} from 'nav-frontend-typografi';
import {RadioPanelGruppe} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";


export const PAGE_ID = 'kontakte-en-nav-veileder';


const initRadioState: string = '';

function OnskerDuAKontakteEnNavVeileder() {
    const [value, setValue] = useState(initRadioState);

    return <div>
        <div>Mer innhold vil komme her</div>
        <div className="gray-background">
            <div className="spm">
                <Undertittel className="spm-row">
                    Ønsker du å kontakte en NAV-veileder for å få hjelp til å komme i jobb?
                </Undertittel>
                <div className="spm-row">
                    <div className="">
                        <RadioPanelGruppe
                            className="spm-row"
                            legend=""
                            name=""
                            radios={[
                                {label: 'Nei', disabled: false, value: 'nei'},
                                {label: 'Kanskje senere', disabled: false, value: 'kanskje senere'},
                                {label: 'Ja', disabled: false, value: 'ja'},
                                {label: 'Usikker', disabled: false, value: 'usikker'},
                            ]}
                            checked={value}
                            onChange={(_, val) => setValue(val)}
                        />
                    </div>
                </div>
                <Hovedknapp spinner={false}
                            disabled={false}
                            onClick={() => {}}>
                    Send</Hovedknapp>
            </div>
        </div>
    </div>
}

export default OnskerDuAKontakteEnNavVeileder;