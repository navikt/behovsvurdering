import React from 'react';
import { Undertittel, Element, Normaltekst } from 'nav-frontend-typografi';
import classnames from 'classnames';

import cvSVG from './cv.svg';
import arbeidsplassenSVG from './arbeidsplassen.svg';
import jobbsokertipsSVG from './jobbsokertips.svg';
import './Anbefaling.less';

interface AnbefalingItemProps {
    tittel: string;
    tekst: string;
    lenke: string;
    lenkeTekst: string;
    svg: string;
}

function AnbefalingItem(props: AnbefalingItemProps) {
    return (
        <div className="anbefaling-item">
            <img src={props.svg} alt="" className="anbefaling-ikon"/>
            <div className="anbefaling-tekst-bolk">
                <Element>{props.tittel}</Element>
                <Normaltekst>{props.tekst}</Normaltekst>
                <a href={props.lenke}>{props.lenkeTekst}</a>
            </div>
        </div>
    );
}

interface Props {
    className?: string;
}

function Anbefaling(props: Props) {
    return (
        <div className={classnames('anbefaling', props.className)}>
            <Undertittel className="anbefaling-tittel">
                Dette anbefaler vi deg å gjøre nå
            </Undertittel>

            <AnbefalingItem
                svg={cvSVG}
                tittel="Registrer CV-en din"
                tekst="CV-en din blir synlig for arbeidsgivere."
                lenke="/arbeidsplassen/cv"
                lenkeTekst="Gå til CV"
            />

            <AnbefalingItem
                svg={arbeidsplassenSVG}
                tittel="Registrer CV-en din"
                tekst="Få oversikt over ledige stillinger i hele landet."
                lenke="/arbeidsplassen/stillinger"
                lenkeTekst="Gå til Arbeidsplassen"
            />

            <AnbefalingItem
                svg={jobbsokertipsSVG}
                tittel="Få jobbsøkertips"
                tekst="Les råd om CV, søknad, nettverk, motivasjon og intervju."
                lenke="/jobbsokerkompetanse/resultatside"
                lenkeTekst="Se tips"
            />
        </div>
    );

}

export default Anbefaling;