import * as React from 'react';
import { Innholdstittel, Sidetittel, Normaltekst } from 'nav-frontend-typografi';
import SisteStilling from './SisteStilling';
import svg from '../del-med-nav-infopanel/arbeidsplassen.svg';
import svgStor from './Jobbmuligheter_desktop.svg';
import MittBehovKnapp from '../mitt-behov-knapp/MittBehovKnapp';
import { KommuneOgLedigeStillingerContext } from '../../context/kommuneOgLedigeStillinger/KommuneOgLedigeStillingerProvider';

interface StillingsInfoProps {
    onClick: () => void;
    sisteStilling: string;
    stillingKategori: string;
    antallStillinger: number;
    antallIKategorien: number;
}

function StillingInfo(props: StillingsInfoProps) {
    const context = React.useContext(KommuneOgLedigeStillingerContext);

    return (
        <div className="stillingContainer">
            <SisteStilling/>
            <div id="stillingsInfoSvg">
                <img src={svg} alt="Arbeidsmarkedet ikon"/>
            </div>

            <div id="jobbmuligheter_tittel">
                <Innholdstittel>Jobbmuligheter i {context.fylkesnavn} </Innholdstittel>
            </div>

            <div id="antallStillingerInfo">
                <div id="antallForStilling">
                    <Sidetittel>{props.antallStillinger}</Sidetittel>
                    <Normaltekst>Stillinger innen <br/> {props.sisteStilling} </Normaltekst>
                </div>
                <div id="antallForKategori">
                    <Sidetittel>{props.antallIKategorien}</Sidetittel>
                    <Normaltekst>Stillinger i kategorien <br/> {props.stillingKategori} </Normaltekst>
                </div>
                <div id="stillingsInfoSvgStor">
                    <img src={svgStor} alt="Arbeidsmarkedet stor ikon"/>
                </div>
            </div>

            <MittBehovKnapp onClick={() => props.onClick()}  />

        </div>
    );
}

export default StillingInfo;