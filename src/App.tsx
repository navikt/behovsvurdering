import * as React from 'react';
import StillingInfo from "./components/stillingsinfo/StillingInfo";
import AppProviders from "./AppProvider";
import Banner from "./components/banner/Banner";

import LettEllerVanskeligSpm from "./pages/lett-vanskelig/LettEllerVanskeligSpm";
import MittBehovKnapp from './components/mitt-behov-knapp/MittBehovKnapp';
import KanDuFinneJobbSpm from "./pages/kan-du-finne-jobb/KanDuFinneJobb";
import ConditionalNavigation from "./utils/conditional-navigation";
import {postDialog} from "./api/api";

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

    byggDialog(){
        let dialog = {overskrift: 'mine tanker om mitt behov for veiledning', tekst: 'tekst'};//tslint disable-line
        dialog.tekst = `Kan du finne jobb selv? ${this.state.svar[KanDuFinneJobbSpm.Id]}\n Lett eller vanskelig? ${this.state.svar[LettEllerVanskeligSpm.Id]}`;//tslint disable-line
        console.log("dialog:", dialog);
    }

    renderPage() {
        const hvisSvaretErLett = new ConditionalNavigation()
            .navigerTil(KanDuFinneJobbSpm.Id)
            .hvis(this.state.svar[LettEllerVanskeligSpm.Id] === 'lett')
            .ellers(App.StartSideId); // skal endres til siste side i FO-1853 og FO-1854

        if (this.state.page === LettEllerVanskeligSpm.Id) {
            return <LettEllerVanskeligSpm
                valgtAlternativ={this.state.svar[LettEllerVanskeligSpm.Id]}
                endreAlternativ={(svar) => this.velgSvar(LettEllerVanskeligSpm.Id, svar) }
                nextPage={ () => this.endreSide(hvisSvaretErLett.naviger()) } />;
        }

        if (this.state.page === KanDuFinneJobbSpm.Id) {
            return <KanDuFinneJobbSpm
                valgtAlternativ={this.state.svar[KanDuFinneJobbSpm.Id]}
                endreAlternativ={(svar) => this.velgSvar(KanDuFinneJobbSpm.Id, svar) }
                nextPage={ () => {
                    this.byggDialog();
                    console.log('this.state.svar', this.state.svar);
                    postDialog({overskrift: 'mine tanker om mitt behov for veiledning', tekst: 'tekst'})
                        .then(() => {
                            this.endreSide(App.StartSideId)
                        })
                }} />;
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
                { this.renderPage() }
            </AppProviders>
        );
    }
}

export default App;
