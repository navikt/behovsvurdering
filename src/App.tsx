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
import { KommuneOgLedigeStillinger } from './datatyper/kommuneOgLedigeStillinger';

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

    byggOgSendDialog(sisteStilling: string, mia: KommuneOgLedigeStillinger) {
        const dialog = {
            overskrift: 'Svarene jeg har gitt om mine jobbmuligheter',
            tekst: `Siste stilling: ${sisteStilling}\n` +
                `${mia.underkategori.antallStillinger} annonser for ${mia.underkategori.kategori} i ${mia.fylkesnavn} \n` +
                `${mia.hovedkategori.antallStillinger} annonser i bransje ${mia.hovedkategori.kategori} i ${mia.fylkesnavn} \n` +
                `${getSpmText(this.state.svar[LettEllerVanskeligSpm.Id],  this.state.svar[KanDuFinneJobbSpm.Id])}`
        };
        this.setState({
            venterPaaDialogRespons: true,
        });

        return postDialog(dialog).then((response: any) => { // tslint:disable-line
            this.setState({
                dialogId: response.id,
                venterPaaDialogRespons: false,
            });
        });
    }

    renderLettVanskeSpmPage(sisteStilling: string, mia: KommuneOgLedigeStillinger) {
        const hvisSvaretErLett = new ConditionalNavigation()
            .navigerTil(KanDuFinneJobbSpm.Id)
            .hvis(this.state.svar[LettEllerVanskeligSpm.Id] === 'lett')
            .ellers(ResultatVanskeligAFaJobb.Id);

        return (
            <LettEllerVanskeligSpm
                valgtAlternativ={this.state.svar[LettEllerVanskeligSpm.Id]}
                endreAlternativ={(svar) => this.velgSvar(LettEllerVanskeligSpm.Id, svar)}
                nextPage={() => this.endreSide(hvisSvaretErLett.naviger())}
                byggOgSendDialog={() => this.byggOgSendDialog(sisteStilling, mia)}
            />
        );
    }

    renderanDuFinneJobbSpm(sisteStilling: string, mia: KommuneOgLedigeStillinger) {
        const hvisSvaretErJa = new ConditionalNavigation()
            .navigerTil(ResultatLettAFaJobb.Id)
            .hvis(this.state.svar[KanDuFinneJobbSpm.Id] === 'ja')
            .ellers(ResultatVanskeligAFaJobb.Id);

        return (
            <KanDuFinneJobbSpm
                valgtAlternativ={this.state.svar[KanDuFinneJobbSpm.Id]}
                endreAlternativ={(svar) => this.velgSvar(KanDuFinneJobbSpm.Id, svar)}
                nextPage={() => this.endreSide(hvisSvaretErJa.naviger())}
                byggOgSendDialog={() => this.byggOgSendDialog(sisteStilling, mia)}
            />
        );
    }

    renderPage(sisteStilling: string, mia: KommuneOgLedigeStillinger) {

        if (this.state.venterPaaDialogRespons) {
            return <div className="spinner-wrapper centered"><NavFrontendSpinner type="XXL"/></div>;
        }

        switch (this.state.page) {
            case LettEllerVanskeligSpm.Id:
                return this.renderLettVanskeSpmPage(sisteStilling, mia);

            case KanDuFinneJobbSpm.Id:
                return this.renderanDuFinneJobbSpm(sisteStilling, mia);

            case ResultatLettAFaJobb.Id:
                return <ResultatLettAFaJobb dialogId={this.state.dialogId} />;

            case ResultatVanskeligAFaJobb.Id:
                return <ResultatVanskeligAFaJobb dialogId={this.state.dialogId} />;

            default:
                return (
                    <StillingInfo
                        stillingKategori={mia.hovedkategori.kategori}
                        sisteStilling={mia.underkategori.kategori}
                        antallStillinger={mia.underkategori.antallStillinger}
                        antallIKategorien={mia.hovedkategori.antallStillinger}
                        onClick={() => this.setState({page: LettEllerVanskeligSpm.Id })}
                    />
                );
        }

    }

    render() {
        return (
            <AppProviders>
                <Banner/>
                <KommuneOgLedigeStillingerContext.Consumer>
                    {mia =>
                        <SisteStillingContext.Consumer>
                            {stilling => this.renderPage(stilling.sisteStilling.label, mia)}
                        </SisteStillingContext.Consumer>
                    }
                </KommuneOgLedigeStillingerContext.Consumer>
            </AppProviders>
        );
    }
}

export default App;
