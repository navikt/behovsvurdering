import React from 'react';
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import jobbSokingSVG from './img/jobbsokertips.svg';
import cvSVG from './img/cv.svg';
import sokSVG from './img/stillingsok.svg';
import mugSVG from './img/design-mug.svg';
import dialogSVG from './img/dialog.svg';
import ScrollKnapp from '../../components/scroll-knapp/ScrollKnapp';
import './InfoView.less';

const InfoView = () => (
    <section className="info-view">
        <Systemtittel className="info-view__header">
            På nav.no får du:
        </Systemtittel>
        <ul className="info-view__item-list">
            <InfoItem ikon={jobbSokingSVG}>
                Jobbsøkertips som passer din situasjon.
            </InfoItem>
            <InfoItem ikon={cvSVG}>
                En CV som gjør deg synlig for arbeidsgivere som ser etter din kompetanse.
            </InfoItem>
            <InfoItem ikon={sokSVG}>
                Oversikt over ledige stillinger i hele landet.
            </InfoItem>
            <InfoItem ikon={mugSVG}>
                En plan for å holde oversikt over jobbsøkingen.
            </InfoItem>
            <InfoItem ikon={dialogSVG}>
                En digital dialog hvor du kan stille veilederen din spørsmål.
            </InfoItem>
        </ul>
        <div className="scroll-knapp-container">
            <ScrollKnapp className="middle-scroll"/>
        </div>
    </section>
);

const InfoItem = (props: { ikon: string, children: React.ReactNode }) => (
    <li className="info-view__item">
        <img src={props.ikon} className="info-view__item--ikon" alt=""/>
        <Normaltekst>{props.children}</Normaltekst>
    </li>
);

export default InfoView;
