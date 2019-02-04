import * as React from 'react';
import { Innholdstittel, Sidetittel, Normaltekst } from 'nav-frontend-typografi';
import SisteStilling from './SisteStilling';
import BoligInformasjon from './BoligInformasjon';
import svg from '../del-med-nav-infopanel/arbeidsplassen.svg';
import svgStor from './Jobbmuligheter_desktop.svg';
import MittBehovKnapp from '../mitt-behov-knapp/MittBehovKnapp';

interface StillingsInfoProps {
    onClick: () => void;
    sisteStilling: string;
    stillingKategori: string;
    antallStillinger: number;
    antallIKategorien: number;
}

function StillingInfo(props: StillingsInfoProps) {
    return (
        <div className="stillingContainer">
            <SisteStilling/>
            <BoligInformasjon/>
            <div id="stillingsInfoSvg">
                <img src={svg} alt="Arbeidsmarkedet ikon"/>
            </div>

            <div id="jobbmuligheter_tittel">
                <Innholdstittel>Jobbmuligheter i ditt fylke</Innholdstittel>
            </div>

            <div id="antallStillingerInfo">
                <div id="antallForStilling">
                    <Sidetittel>{props.antallStillinger}</Sidetittel>
                    <Normaltekst>Stillinger som <br/> {props.sisteStilling} </Normaltekst>
                </div>
                <div id="antallForKategori">
                    <Sidetittel>{props.antallIKategorien}</Sidetittel>
                    <Normaltekst>Stillinger i kategorien <br/> {props.sisteStilling} </Normaltekst>
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