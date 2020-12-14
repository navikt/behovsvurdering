import React, { useState } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';
import './InputView.less';

export const NEI = 'Nei';
export const KANSKJE = 'Kanskje senere';
export const JA = 'Ja';
export const USIKKER = 'Usikker';

interface InputViewProps {
    onSubmit: (value: string) => void;
    disabled: boolean;
}

const initRadioState: string | undefined = undefined;

export const SPORSMAL = 'Ønsker du å kontakte veilederen din for å komme videre med jobbsøkingen?';

function InputView(props: InputViewProps) {
    const [value, setValue] = useState(initRadioState);
    const [feilState, setFeil] = useState(false);

    const feil = feilState ? {feilmelding: 'Obligatorisk felt'} : undefined;
    return (
        <section className="input-view">
            <Systemtittel className="blokk-m center-text">
                {SPORSMAL}
            </Systemtittel>
            <RadioPanelGruppe
                className="input-view__radio-gruppe"
                legend="Ønsker du kontakt med veileder?"
                name=""
                radios={[
                    {label: NEI, disabled: props.disabled, value: NEI},
                    {label: JA, disabled: props.disabled, value: JA},
                    {label: KANSKJE, disabled: props.disabled, value: KANSKJE},
                    {label: USIKKER, disabled: props.disabled, value: USIKKER},
                ]}
                checked={value}
                onChange={(_, val) => setValue(val)}
                feil={feil}
            />
            <Hovedknapp
                className="input-view__send-knapp"
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
        </section>
    );
}

export default InputView;
