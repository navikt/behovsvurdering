import * as React from "react";
import InfoPanel from "../infopanel/InfoPanel";
import Lenke from 'nav-frontend-lenker';
import { Element, Normaltekst } from 'nav-frontend-typografi'
import NavFrontendChevron from 'nav-frontend-chevron';
import VeilederPanel from "../veilederpanel/VeilederPanel";

import cvSvg from './cv.svg';
import arbeidsplassenSvg from './arbeidsplassen.svg';

interface DeltMedNavInfoPanelProps {
    modus: string
}

class DeltMedNavInfoPanel extends React.Component<DeltMedNavInfoPanelProps> {

    renderLenkeDeltMedNav(value: string) {
        return (
            <Lenke href="" target="_blank">{value}</Lenke>
        );
    }

    render() {
        return (
            <div className="delt-med-nav-infopanel">

                <div className="info-blokk">
                    <InfoPanel type="ok-sirkel-fyll" className="">
                        Dine svar er {this.renderLenkeDeltMedNav("delt")} med din med veileder i NAV.
                    </InfoPanel>
                </div>

                <div className="ikon-blokker">
                    <div className="registrer-cv-blokk">
                        <div className="blokk-img">
                            <img src={cvSvg} alt=""/>
                        </div>
                        <div className="blokk-txt">
                            <Element>
                                Registrer din CV her
                            </Element>
                            <Normaltekst>
                                Bli synlig for arbeidsgivere i CV-databasen.
                            </Normaltekst>
                            <Lenke href="" target="_blank">
                                <Element>Min CV <NavFrontendChevron stor={true} /> </Element>
                            </Lenke>
                        </div>
                    </div>
                    <div className="arbeidsplassen-blokk">
                        <div className="blokk-img">
                            <img src={arbeidsplassenSvg} alt=""/>
                        </div>
                        <div className="blokk-txt">
                            <Element>
                                Arbeidsplassen
                            </Element>
                            <Normaltekst>
                                Se alle offentlige utlyste stillinger.
                            </Normaltekst>
                            <Lenke href="" target="_blank">
                                <Element>Se jobbannonser <NavFrontendChevron stor={true} /> </Element>
                            </Lenke>
                        </div>
                    </div>
                </div>

                <div className="veilederpanel-blokk">
                    <VeilederPanel>
                        <Normaltekst>
                            Trenger du mer veiledning på et senere tidspunkt, kan du kontakte
                            veilederen din i { <Lenke href="" target="_blank">dialogen</Lenke> }.
                        </Normaltekst>
                    </VeilederPanel>
                </div>

            </div>
        );
    }
}

export default DeltMedNavInfoPanel;