import React, { useState } from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';

export const NEI = 'Nei';
export const KANSKJE = 'Kanskje senere';
export const JA = 'Ja';
export const USIKKER = 'Usikker';

interface ViewProps {
    onSubmit: (value: string) => void;
    disabled: boolean;
}

const initRadioState: string | undefined = undefined;

function View(props: ViewProps) {
    const [value, setValue] = useState(initRadioState);
    const [feilState, setFeil] = useState(false);

    const feil = feilState ? {feilmelding: 'Du har en mega feil'} : undefined;
    return (
        <div>
            <div>Mer innhold vil komme her</div>
            <div className="beholder">
                    <div className="rad">
                    <Undertittel className="rad-item">
                        Ønsker du å kontakte en NAV-veileder for å få hjelp til å komme i jobb?
                    </Undertittel>
                    <RadioPanelGruppe
                        className="rad-item"
                        legend=""
                        name=""
                        radios={[
                            {label: NEI, disabled: props.disabled, value: NEI},
                            {label: KANSKJE, disabled: props.disabled, value: KANSKJE},
                            {label: JA, disabled: props.disabled, value: JA},
                            {label: USIKKER, disabled: props.disabled, value: USIKKER},
                        ]}
                        checked={value}
                        onChange={(_, val) => setValue(val)}
                        feil={feil}
                    />
                    <div className="center">
                        <Hovedknapp
                            spinner={props.disabled}
                            disabled={props.disabled}
                            onClick={() => {
                                if (value === undefined) {
                                    setFeil(true);
                                } else {
                                    setFeil(false);
                                    props.onSubmit(value);
                                }
                            }}
                        >
                            Send
                        </Hovedknapp>
                    </div>
                    </div>
                </div>
        </div>
    );
}

export default View;