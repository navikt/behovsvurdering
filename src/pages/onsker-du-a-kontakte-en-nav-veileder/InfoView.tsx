import React from 'react';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import jobbSokingSVG from './img/jobbsokertips.svg';
import innformasjonSVG from './img/hand-kindle.svg';
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
                    Disse tjenestene kan hjelpe deg med å komme raskere i jobb
                </Undertittel>
                <div className="rad-item">
                    <div className="liste-item">
                        <img src={jobbSokingSVG} className="ikon" alt=""/>
                        <Normaltekst>En digital kartlegging av hvordan du søker jobber og tips tilpasset din prosess.</Normaltekst>
                    </div>
                    <div className="liste-item">
                        <img src={innformasjonSVG} className="ikon" alt=""/>
                        <Normaltekst>Informasjon fra eksperter om jobbsøking, CV, søknad og intervju.</Normaltekst>
                    </div>
                    <div className="liste-item">
                        <img src={cvSVG} className="ikon" alt=""/>
                        <Normaltekst>CV-en din blir synling for arbeidsgivere som ser etter kandidater på våre sider.</Normaltekst>
                    </div>
                    <div className="liste-item">
                        <img src={sokSVG} className="ikon" alt=""/>
                        <Normaltekst>Norges største oversikt over ledige stillinger.</Normaltekst>
                    </div>
                    <div className="liste-item">
                        <img src={mugSVG} className="ikon" alt=""/>
                        <Normaltekst>En plan hvor du kan holde oversikt over jobbsøking.</Normaltekst>
                    </div>
                    <div className="liste-item padding-bottom">
                        <img src={dialogSVG} className="ikon" alt=""/>
                        <Normaltekst>En dialogløsning hvor du kan stille veilederen din spørsmål.</Normaltekst>
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