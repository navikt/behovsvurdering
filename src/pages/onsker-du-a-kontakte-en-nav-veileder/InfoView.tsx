import React from 'react';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import jobbSokingSVG from './img/jobbsokertips.svg';
import cvSVG from './img/cv.svg';
import sokSVG from './img/stillingsok.svg';
import mugSVG from './img/design-mug.svg';
import dialogSVG from './img/dialog.svg';
import ScrollKnapp from '../../components/scroll-knapp/ScrollKnapp';
import './index.less';

function InfoView() {

    return (
        <div className="beholder gray">
            <div className="rad">
                <Undertittel className="rad-item">
                    På nav.no får du:
                </Undertittel>
                <div className="rad-item">
                    <div className="liste-item">
                        <img src={jobbSokingSVG} className="ikon" alt=""/>
                        <Normaltekst>Jobbsøkertips som passer din situasjon</Normaltekst>
                    </div>
                    <div className="liste-item">
                        <img src={cvSVG} className="ikon" alt=""/>
                        <Normaltekst>En CV som gjør deg synlig for arbeidsgivere som ser etter din kompetanse.</Normaltekst>
                    </div>
                    <div className="liste-item">
                        <img src={sokSVG} className="ikon" alt=""/>
                        <Normaltekst>Oversikt over ledige stillinger i hele landet.</Normaltekst>
                    </div>
                    <div className="liste-item">
                        <img src={mugSVG} className="ikon" alt=""/>
                        <Normaltekst>En plan for å holde oversikt over jobbsøkingen.</Normaltekst>
                    </div>
                    <div className="liste-item padding-bottom">
                        <img src={dialogSVG} className="ikon" alt=""/>
                        <Normaltekst>En digital dialog hvor du kan stille veilederen din spørsmål.</Normaltekst>
                    </div>
                </div>
            </div>
            <div className="scroll-knapp-container">
            <ScrollKnapp className="middle-scroll"/>
            </div>
        </div>
    );
}

export default InfoView;
