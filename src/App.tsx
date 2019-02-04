import * as React from 'react';
import StillingInfo from './components/stillingsinfo/StillingInfo';
import AppProviders from './AppProvider';
import Banner from './components/banner/Banner';

import LettEllerVanskeligSpm from './pages/lett-vanskelig/LettEllerVanskeligSpm';
import KanDuFinneJobbSpm from './pages/kan-du-finne-jobb/KanDuFinneJobb';
import ConditionalNavigation from './utils/conditional-navigation';
import ResultatLettAFaJobb from './pages/resultat-lett-afa-jobb/ResultatLettAFaJobb';
import ResultatVanskeligAFaJobb from './pages/resultat-vanskelig-afa-jobb/ResultatVanskeligAFaJobb';
import { postDialog } from './api/api';
import { SisteStillingContext } from './context/sisteStilling/SisteStillingProvider';
import { KommuneOgLedigeStillingerContext } from './context/kommuneOgLedigeStillinger/KommuneOgLedigeStillingerProvider';
import { getSpmText } from './dialogTekst';
import NavFrontendSpinner from 'nav-frontend-spinner';

interface State {
    page?: string;
    svar: object;
    venterPaaDialogRespons: boolean;
    dialogId: string;
}

const initialState = {
    page: '',
    svar: {
        [LettEllerVanskeligSpm.Id] : '',
        [KanDuFinneJobbSpm.Id]: ''
    },
    venterPaaDialogRespons: false,
    dialogId: ''
};

interface AppProps {

}

class App extends React.Component<AppProps, State> {

    static StartSideId: string = '';

    constructor(props: AppProps) {
        super(props);
        this.state = initialState;
    }

    velgSvar(spm: string, nySvar: string) {
        const oppdatertSvar = this.state.svar;
        oppdatertSvar[spm] = nySvar;

        this.setState({
            page: this.state.page,
            svar: oppdatertSvar
        });
    }

    endreSide(side: string) {
        this.setState({
            page: side,
            svar: this.state.svar
        });
    }

    byggOgSendDialog(sisteStilling: string, kommune: string, antallStillinger: number) {
        const dialog = {
            overskrift: 'mine tanker om mitt behov for veiledning',
            tekst: `Siste stilling: ${sisteStilling}\n` +
                `Kommune: ${kommune}\n` +
                `Antall ledige stillinger i kategori: ${antallStillinger}\n` +
                `${getSpmText(this.state.svar[LettEllerVanskeligSpm.Id],  this.state.svar[KanDuFinneJobbSpm.Id])}`
        };

        this.setState({
            venterPaaDialogRespons: true,
        });

        return postDialog(dialog).then((response: any) => {
            this.setState({
                dialogId: response.dialogId,
                venterPaaDialogRespons: false,
            });
        });
    }

    renderPage(sisteStilling: string, kommune: string, antallStillinger: number) {

        if (this.state.venterPaaDialogRespons) {
            return <div className="spinner-wrapper centered"><NavFrontendSpinner type="XXL"/></div>;
        }

        const hvisSvaretErLett = new ConditionalNavigation()
            .navigerTil(KanDuFinneJobbSpm.Id)
            .hvis(this.state.svar[LettEllerVanskeligSpm.Id] === 'lett')
            .ellers(ResultatVanskeligAFaJobb.Id);

        if (this.state.page === LettEllerVanskeligSpm.Id) {
            return <LettEllerVanskeligSpm
                valgtAlternativ={this.state.svar[LettEllerVanskeligSpm.Id]}
                endreAlternativ={(svar) => this.velgSvar(LettEllerVanskeligSpm.Id, svar)}
                nextPage={() => this.endreSide(hvisSvaretErLett.naviger())}
                byggOgSendDialog={() => this.byggOgSendDialog(sisteStilling, kommune, antallStillinger)}
            />;
        }

        const hvisSvaretErJa = new ConditionalNavigation()
            .navigerTil(ResultatLettAFaJobb.Id)
            .hvis(this.state.svar[KanDuFinneJobbSpm.Id] === 'ja')
            .ellers(ResultatVanskeligAFaJobb.Id);

        if (this.state.page === KanDuFinneJobbSpm.Id) {
            return <KanDuFinneJobbSpm
                valgtAlternativ={this.state.svar[KanDuFinneJobbSpm.Id]}
                endreAlternativ={(svar) => this.velgSvar(KanDuFinneJobbSpm.Id, svar)}
                nextPage={() => this.endreSide(hvisSvaretErJa.naviger())}
                byggOgSendDialog={() => this.byggOgSendDialog(sisteStilling, kommune, antallStillinger)}
            />;
        }

        if (this.state.page === ResultatLettAFaJobb.Id) {
            return <ResultatLettAFaJobb dialogId={this.state.dialogId} />;
        }

        if (this.state.page === ResultatVanskeligAFaJobb.Id) {
            return <ResultatVanskeligAFaJobb dialogId={this.state.dialogId} />;
        }

        // default page
        return <StillingInfo
            stillingKategori={''}
            sisteStilling={sisteStilling}
            antallStillinger={3} // <- todo: MAA KODES I FO-1863
            antallIKategorien={antallStillinger}
            onClick={() => this.setState({page: LettEllerVanskeligSpm.Id })} />;
    }

    render() {
        return (
            <AppProviders>
                <Banner/>
                <KommuneOgLedigeStillingerContext.Consumer>
                    {mia =>
                        <SisteStillingContext.Consumer>
                            {stilling => this.renderPage(stilling.sisteStilling.label, mia.kommunenavn, mia.antalStillingerIKategorin)}
                        </SisteStillingContext.Consumer>
                    }
                </KommuneOgLedigeStillingerContext.Consumer>
            </AppProviders>
        );
    }
}

export default App;
