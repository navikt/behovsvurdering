import * as React from 'react';
import StillingInfo from "./components/stillingsinfo/StillingInfo";
import AppProviders from "./AppProvider";
import Banner from "./components/banner/Banner";

import LettEllerVanskeligSpm from "./pages/lett-vanskelig/LettEllerVanskeligSpm";
import MittBehovKnapp from './components/mitt-behov-knapp/MittBehovKnapp';
import KanDuFinneJobbSpm from "./pages/kan-du-finne-jobb/KanDuFinneJobb";
import ConditionalNavigation from "./utils/conditional-navigation";
import { postDialog } from "./api/api";
import { SisteStillingContext } from "./context/sisteStilling/SisteStillingProvider";
import { KommuneOgLedigeStillingerContext } from "./context/kommuneOgLedigeStillinger/KommuneOgLedigeStillingerProvider";

interface State {
    page?: string,
    svar: object
}

const initialState = {
    page: '',
    svar: {
        [LettEllerVanskeligSpm.Id] : "",
        [KanDuFinneJobbSpm.Id]: ""
    }
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
        let dialog = {
            overskrift: 'mine tanker om mitt behov for veiledning',
            tekst: `Siste stilling: ${sisteStilling}
                    Kommune: ${kommune}
                    Antall ledige stillinger i kategori: ${antallStillinger} 
                    Lett å få jobb: ${this.state.svar[LettEllerVanskeligSpm.Id]}
                    Kan finne jobb selv: ${this.state.svar[KanDuFinneJobbSpm.Id]}`
        };
        return postDialog(dialog);
    }

    renderPage(sisteStilling: string, kommune: string, antallStillinger: number) {
        const hvisSvaretErLett = new ConditionalNavigation()
            .navigerTil(KanDuFinneJobbSpm.Id)
            .hvis(this.state.svar[LettEllerVanskeligSpm.Id] === 'lett')
            .ellers(App.StartSideId); // skal endres til siste side i FO-1853 og FO-1854

        if (this.state.page === LettEllerVanskeligSpm.Id) {
            return <LettEllerVanskeligSpm
                valgtAlternativ={this.state.svar[LettEllerVanskeligSpm.Id]}
                endreAlternativ={(svar) => this.velgSvar(LettEllerVanskeligSpm.Id, svar) }
                nextPage={ () => this.endreSide(hvisSvaretErLett.naviger()) }
                byggOgSendDialog={() => this.byggOgSendDialog(sisteStilling, kommune, antallStillinger)}
            />;
        }

        if (this.state.page === KanDuFinneJobbSpm.Id) {
            return <KanDuFinneJobbSpm
                valgtAlternativ={this.state.svar[KanDuFinneJobbSpm.Id]}
                endreAlternativ={(svar) => this.velgSvar(KanDuFinneJobbSpm.Id, svar) }
                nextPage={ () => this.endreSide(App.StartSideId)}
                byggOgSendDialog={() => this.byggOgSendDialog(sisteStilling, kommune, antallStillinger)}
            />;
        }

        // default page
        return (
            <div>
                <StillingInfo />
                <MittBehovKnapp onClick={ () => this.setState({page: LettEllerVanskeligSpm.Id })}  />
            </div>
        );
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
