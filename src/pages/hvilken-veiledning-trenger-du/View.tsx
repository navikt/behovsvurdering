import React, {useState} from 'react';
import {Undertittel} from "nav-frontend-typografi";
import {Textarea} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";


interface ViewProps{
  onSubmit: (value: string) => void;
  disabled: boolean;
}

const initState: string = '';

function View(props: ViewProps) {
    const [value, setValue] = useState(initState);

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
                disabled={props.disabled}
                onChange={(e) => setValue((e.target as HTMLInputElement).value)}
            />
            </div>
            <Hovedknapp
                spinner={props.disabled}
                disabled={props.disabled}
                onClick={() => props.onSubmit(value)}>
                Send
            </Hovedknapp>
        </div>
    );
}

export default View;