import React, { useState } from 'react';
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import { Textarea } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';
import './View.less';

interface ViewProps {
	onSubmit: (value: string) => void;
	disabled: boolean;
}

const maxLengde = 500;

export const SPORSMAL = 'Hva trenger du hjelp til i jobbsøkingen?';

const TekstTeller = (antallSkrevet: number, max: number): React.ReactNode => {
	const tegnDifferanse = Math.abs(antallSkrevet - max);

	if (antallSkrevet > max) {
		return `Du har ${tegnDifferanse} tegn for mye`;
	} else if (tegnDifferanse <= 50) {
		return `Du har ${tegnDifferanse} tegn igjen`;
	}

	return '';
};

function feilmelding(feil: boolean, maksLengde: number, value: string) {
	if (!feil) {
		return;
	}
	if (maksLengde < value.length) {
		return { feilmelding: 'Du må korte ned teksten til 500 tegn' };
	}
	return { feilmelding: 'Obligatorisk felt' };
}

function View(props: ViewProps) {
	const [value, setValue] = useState('');
	const [feilState, setFeil] = useState(false);

	const feil = feilmelding(feilState, maxLengde, value);
	return (
		<div className="hvilken-veiledning">
			<Systemtittel className="hvilken-veiledning__tittel blokk-m">{SPORSMAL}</Systemtittel>
			<Normaltekst className="blokk-xxs">Du kan skrive om</Normaltekst>
			<ul className="hvilken-veiledning__tips-liste blokk-s">
				<li>hva slags jobb du ønsker deg</li>
				<li>hva som skal til for at du skal komme i jobb</li>
			</ul>
			<Textarea
				placeholder="Skriv til din veileder her"
				textareaClass="hvilken-veiledning__tekst-felt blokk-l"
				label={false}
				tellerTekst={TekstTeller}
				value={value}
				maxLength={maxLengde}
				disabled={props.disabled}
				onChange={e => setValue((e.target as HTMLTextAreaElement).value)}
				feil={feil}
			/>
			<Hovedknapp
				spinner={props.disabled}
				disabled={props.disabled}
				className="hvilken-veiledning__send-knapp"
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
	);
}

export default View;
