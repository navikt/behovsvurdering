import React, { useState } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import { Textarea } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';

interface ViewProps {
    onSubmit: (value: string) => void;
    disabled: boolean;
}

const initState: string = '';
const maxLengde = 500;

export const SPORSMAL = 'Hva trenger du hjelp til i jobbsøkingen?';

const TekstTeller = (antallSkrvet: number, max: number): React.ReactNode => {
    if (antallSkrvet > max) {
        return 'Du har ' + (antallSkrvet - max)  + ' tegn for mye';
    }
    if (max - antallSkrvet <= 50) {
        return 'Du har ' + (max - antallSkrvet) + ' tegn igjen';
    }
    return '';
};

function feilmelding(feil: boolean, maksLengde: number, value: string) {
    if (!feil) {
        return;
    }
    if (maksLengde < value.length) {
        return {feilmelding: 'Du må korte ned teksten til 500 tegn'};
    }
    return {feilmelding: 'Obligatorisk felt'};
}

function View(props: ViewProps) {
    const [value, setValue] = useState(initState);
    const [feilState, setFeil] = useState(false);

    const feil = feilmelding(feilState, maxLengde, value);
    return (
        <div className="beholder">
            <div className="rad">
                <Systemtittel className="rad-item">
                    {SPORSMAL}
                </Systemtittel>
                Du kan skrive om
                <div className="rad-item">
                    <ul>
                        <li>hva slags jobb du ønsker deg</li>
                        <li>hva som skal til for at du skal komme i jobb</li>
                    </ul>
                </div>
                <div className="rad-item">
                    <Textarea
                        placeholder="Skriv til din veileder her"
                        textareaClass="spm-text-area"
                        label={false}
                        tellerTekst={TekstTeller}
                        value={value}
                        maxLength={maxLengde}
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
                            if (value === '' || value.length > maxLengde) {
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
