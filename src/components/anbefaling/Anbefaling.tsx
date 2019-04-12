import React from 'react';
import {Undertittel, Element, Normaltekst} from "nav-frontend-typografi";
import classnames from "classnames";

import cvSVG from './cv.svg'
import arbeidsplassenSVG from './arbeidsplassen.svg'
import jobbsokertipsSVG from './jobbsokertips.svg'
import './Anbefaling.less'


interface Props {
    className?: string;
}

function Anbefaling(props: Props){
    return (
        <div className={classnames('anbefaling', props.className)}>
            <Undertittel className="anbefaling-tittel">
                Dette anbefaler vi deg å gjøre nå
            </Undertittel>

            <div className="anbefaling-item">
                <img src={cvSVG} alt="" className="anbefaling-ikon"/>
                <div className="anbefaling-tekst-bolk">
                    <Element>Registrer CV-en din</Element>
                    <Normaltekst>CV-en din blir synlig for arbeidsgivere.</Normaltekst>
                    <a href="bedfe">Gå til CV</a>
                </div>
            </div>
            <div className="anbefaling-item">
                <img src={arbeidsplassenSVG} alt="" className="anbefaling-ikon"/>
                <div className="anbefaling-tekst-bolk">
                    <Element>Se ledige stillinger</Element>
                    <Normaltekst>Få oversikt over ledige stillinger i hele landet.</Normaltekst>
                    <a href="bedfe">Gå til Arbeidsplassen</a>
                </div>
            </div>
            <div className="anbefaling-item">
                <img src={jobbsokertipsSVG} alt="" className="anbefaling-ikon"/>
                <div className="anbefaling-tekst-bolk">
                    <Element>Få jobbsøkertips</Element>
                    <Normaltekst>Les råd om CV, søknad, nettverk, motivasjon og intervju</Normaltekst>
                    <a href="bedfe">Se tips</a>
                </div>
            </div>
        </div>
    )

}

export default Anbefaling