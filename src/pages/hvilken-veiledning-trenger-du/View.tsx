import React, { useState } from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import { Textarea } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';

interface ViewProps {
    onSubmit: (value: string) => void;
    disabled: boolean;
}

const initState: string = '';

export const SPORSMAL = 'Hvilken veiledning trenger du fra NAV for å komme i jobb?';

function View(props: ViewProps) {
    const [value, setValue] = useState(initState);
    const [feilState, setFeil] = useState(false);

    const feil = feilState ? {feilmelding: 'Obligatorisk felt'} : undefined;
    return (
        <div className="beholder">
            <div className="rad">
                <Undertittel className="rad-item">
                    {SPORSMAL}
                </Undertittel>
                <div className="rad-item">
                    <ul>
                        <li>Er det lett eller vanskelig for deg å komme i jobb?</li>
                        <li>Hva slags jobb du ser for deg i fremtiden?</li>
                        <li>Hva påvirker mulighetene dine for jobb?</li>
                        <li>Hva må til for at du skal komme i jobb?</li>
                    </ul>
                </div>
                <div className="rad-item">
                    <Textarea
                        placeholder="Skriv til din veileder her"
                        textareaClass="spm-text-area"
                        label={false}
                        tellerTekst={() => false}
                        value={value}
                        disabled={props.disabled}
                        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
                        feil={feil}
                    />
                </div>
                <div className="center">
                    <Hovedknapp
                        spinner={props.disabled}
                        disabled={props.disabled}
                        onClick={() => {
                            if (value === '') {
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
    );
}

export default View;