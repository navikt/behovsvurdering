import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import cvSVG from './cv.svg';
import arbeidsplassenSVG from './arbeidsplassen.svg';
import jobbsokertipsSVG from './jobbsokertips.svg';
import './Anbefaling.less';
import { linkMetrikk } from '../../metrikker/frontendlogger';

interface AnbefalingItemProps {
    tittel: string;
    tekst: string;
    lenke: string;
    lenkeTekst: string;
    svg: string;
    onClick?: () => void;
}

export function AnbefalingItem(props: AnbefalingItemProps) {
    return (
        <div className="anbefaling-item">
            <img src={props.svg} alt="" className="anbefaling-ikon"/>
            <div className="anbefaling-tekst-bolk">
                <Element>{props.tittel}</Element>
                <Normaltekst>{props.tekst}</Normaltekst>
                <a href={props.lenke} onClick={props.onClick}>{props.lenkeTekst}</a>
            </div>
        </div>
    );
}

interface Anbefaling {
    panel?: string;
    tekst?: string;
    lenkeTekst?: string;
}

export function Jobbsokertips(props: Anbefaling) {
    const {lenkeTekst, tekst, panel} = props;
    return (
        <AnbefalingItem
            svg={jobbsokertipsSVG}
            tittel="Få jobbsøkertips"
            tekst={tekst ? tekst : 'Les tips om CV, søknad, intervju, motivasjon og mer.'}
            lenke="/jobbsokerkompetanse/resultatside"
            lenkeTekst={lenkeTekst ? lenkeTekst : 'Se tips'}
            onClick={() => linkMetrikk('jobbsokerkompetanse', panel)}
        />
    );
}

export function Arbeidsplassen(props: Anbefaling) {
    const {lenkeTekst, tekst, panel} = props;
    return (
    <AnbefalingItem
        svg={arbeidsplassenSVG}
        tittel="Registrer CV-en din"
        tekst={tekst ? tekst : 'Få oversikt over ledige stillinger i hele landet.'}
        lenke="/arbeidsplassen/stillinger"
        lenkeTekst={lenkeTekst ? lenkeTekst : 'Gå til Arbeidsplassen'}
        onClick={() => linkMetrikk('stillinger', panel)}
    />
    );
}

export function CV(props: Anbefaling) {
    const {lenkeTekst, tekst, panel} = props;
    return (
        <AnbefalingItem
            svg={cvSVG}
            tittel="Registrer CV-en din"
            tekst={tekst ? tekst : 'CV-en din blir synlig for arbeidsgivere.'}
            lenke="/arbeidsplassen/cv"
            lenkeTekst={lenkeTekst ? lenkeTekst : 'Gå til CV'}
            onClick={() => linkMetrikk('cv', panel)}
        />
    );
}
