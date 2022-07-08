import React from 'react';
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import { AlertStripeSuksess } from 'nav-frontend-alertstriper';
import './Oppsummering.less';

interface Props {
	dialogId: string;
	tekst: string;
	children?: React.ReactNode;
	panel?: string;
}

function Oppsummering(props: Props) {
	return (
		<div className="oppsummering">
			<AlertStripeSuksess className="oppsummering__alertstripe">
				<Normaltekst>
					Svaret ditt er&nbsp;
					<a href={`https://aktivitetsplan.nav.no/dialog/${props.dialogId}`}>
						delt med veilederen din
					</a>
					&nbsp; som nå vil vurdere:
				</Normaltekst>
				<ul className="oppsummering__alertstripe--liste">
					<li>jobbmulighetene dine</li>
					<li>hvor mye hjelp du trenger for å komme i jobb</li>
				</ul>
				{props.tekst}
			</AlertStripeSuksess>
			<section className="oppsummering__anbefalinger">
				<Systemtittel className="oppsummering__anbefalinger--tittel">
					Dette anbefaler vi deg å gjøre nå
				</Systemtittel>
				<div className="oppsummering__anbefalinger--liste">{props.children}</div>
			</section>
		</div>
	);
}

export default Oppsummering;
