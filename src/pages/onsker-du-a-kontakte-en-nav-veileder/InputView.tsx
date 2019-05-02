import React, { useState } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';
import { vurderingsMetrikk } from '../../metrikker/frontendlogger';

export const NEI = 'Nei';
export const KANSKJE = 'Kanskje senere';
export const JA = 'Ja';
export const USIKKER = 'Usikker';

interface InputViewProps {
    onSubmit: (value: string) => void;
    disabled: boolean;
}

const initRadioState: string | undefined = undefined;

export const SPORSMAL = 'Ønsker du å kontakte en NAV-veileder for å få hjelp til å komme i jobb?';

function InputView(props: InputViewProps) {
    const [value, setValue] = useState(initRadioState);
    const [feilState, setFeil] = useState(false);

    const feil = feilState ? {feilmelding: 'Obligatorisk felt'} : undefined;
    return (
        <div className="beholder">
            <div className="rad">
                <Systemtittel className="rad-item center-text">
                    Ønsker du å kontakte  veilederen din for å komme videre med jobbsøkingen?
                </Systemtittel>
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
                                vurderingsMetrikk(value);
                            }
                        }}
                    >
                        Send
                    </Hovedknapp>
                </div>
            </div>
        </div>
    );
}

export default InputView;
