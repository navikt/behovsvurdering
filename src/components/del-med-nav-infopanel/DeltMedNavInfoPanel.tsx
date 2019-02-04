import * as React from 'react';
import InfoPanel from '../infopanel/InfoPanel';
import Lenke from 'nav-frontend-lenker';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import NavFrontendChevron from 'nav-frontend-chevron';
import VeilederPanel from '../veilederpanel/VeilederPanel';

import cvSvg from './cv.svg';
import arbeidsplassenSvg from './arbeidsplassen.svg';
import jobbsokertipsSvg from './jobbsokertips.svg';

interface DeltMedNavInfoPanelProps {
    modus: string;
    dialogId: string;
}

const TEKST_MAP = {
    REG_CV_LENKE: 'https://arbeidsplassen.nav.no/', // todo: maa skrives om til aa gjenkjenne miljo

    ARB_BLOKK_ICON: arbeidsplassenSvg,
    ARB_BLOKK_TITTEL: 'Arbeidsplassen',
    ARB_BLOKK_TEKST: 'Se alle offentlige utlyste stillinger.',
    ARB_BLOKK_LENKE: 'Se jobbannonser',
    ARB_BLOKK_HREF: 'https://stillingsok.nav.no', // todo: maa skrives om til aa gjenkjenne miljo
    LETT_VEILEDER_INFO: 'Trenger du mer veiledning på et senere tidspunkt, kan du kontakte veilederen din i ',

    JOBB_BLOKK_ICON: jobbsokertipsSvg,
    JOBB_BLOKK_TITTEL: 'Jobbsøkertips',
    JOBB_BLOKK_TEKST: 'Du skal kanskje søke jobb og vet kanskje ikke helt hvor du skal begynne?',
    JOBB_BLOKK_LENKE: 'Se tips',
    JOBB_BLOKK_HREF: 'https://tjenester.nav.no/veiviserarbeidssoker/?situasjon=mistet-jobben',
    VSK_VEILEDER_INFO: 'Hva mer bør NAV vite? Snakk med din veileder gjennom den digitale '
};

class DeltMedNavInfoPanel extends React.Component<DeltMedNavInfoPanelProps> {

    static renderLenkeDeltMedNav(value: string) {
        return (
            <Lenke href={`/aktivitetsplan/dialog/${this.props.dialogId}`}>{value}</Lenke>
        );
    }

    getTekst(txt: string) {
        switch (txt) {
            case 'icon': return this.props.modus === 'lett' ? TEKST_MAP.ARB_BLOKK_ICON : TEKST_MAP.JOBB_BLOKK_ICON;
            case 'title': return this.props.modus === 'lett' ? TEKST_MAP.ARB_BLOKK_TITTEL : TEKST_MAP.JOBB_BLOKK_TITTEL;
            case 'text': return this.props.modus === 'lett' ? TEKST_MAP.ARB_BLOKK_TEKST : TEKST_MAP.JOBB_BLOKK_TEKST;
            case 'link-text': return this.props.modus === 'lett' ? TEKST_MAP.ARB_BLOKK_LENKE : TEKST_MAP.JOBB_BLOKK_LENKE;
            case 'link-href': return this.props.modus === 'lett' ? TEKST_MAP.ARB_BLOKK_HREF : TEKST_MAP.JOBB_BLOKK_HREF;
            case 'info': return this.props.modus === 'lett' ? TEKST_MAP.LETT_VEILEDER_INFO : TEKST_MAP.VSK_VEILEDER_INFO;
            default: return TEKST_MAP[txt];
        }
    }

    render() {
        return (
            <div className="delt-med-nav-infopanel">

                <div className="info-blokk">
                    <InfoPanel type="ok-sirkel-fyll" className="">
                        Dine svar er {DeltMedNavInfoPanel.renderLenkeDeltMedNav('delt')} med din med veileder i NAV.
                    </InfoPanel>
                </div>

                <div className="ikon-blokker">
                    <div className="justify-blokk">
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
                                <Lenke href={this.getTekst(TEKST_MAP.REG_CV_LENKE)} target="_blank">
                                    <Element>Min CV <NavFrontendChevron stor={true} /> </Element>
                                </Lenke>
                            </div>
                        </div>

                        <div className="arbeidsplassen-blokk">
                            <div className="blokk-img">
                                <img src={this.getTekst('icon')} alt=""/>
                            </div>
                            <div className="blokk-txt">
                                <Element>
                                    {this.getTekst('title')}
                                </Element>
                                <Normaltekst>
                                    {this.getTekst('text')}
                                </Normaltekst>
                                <Lenke href={this.getTekst('link-href')} target="_blank">
                                    <Element>{this.getTekst('link-text')} <NavFrontendChevron stor={true} /> </Element>
                                </Lenke>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="veilederpanel-blokk">
                    <VeilederPanel>
                        <Normaltekst>
                            {this.getTekst('info')} { <Lenke href={`/aktivitetsplan/dialog/${this.props.dialogId}`}>dialogen</Lenke> }.
                        </Normaltekst>
                    </VeilederPanel>
                </div>

            </div>
        );
    }
}

export default DeltMedNavInfoPanel;