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
import NavFrontendSpinner from 'nav-frontend-spinner';
import { KommuneOgLedigeStillinger } from './datatyper/kommuneOgLedigeStillinger';
import Feilmelding from './components/feilmelding/feilmelding';

interface State {
    svar: object;
}

const initialState:State = {
    svar: {
        [LettEllerVanskeligSpm.Id] : '',
        [KanDuFinneJobbSpm.Id]: ''
    }
};

function App() {

    const [dialogId, setDialogId] = React.useState('');
    const [venterPaDialogResponse, setVenterPaDialogResponse] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [page, setPage] = React.useState('');
    const [state, setState] = React.useState(initialState);

    function velgSvar(spm: string, nySvar: string) {
        const oppdatertSvar = state.svar;
        oppdatertSvar[spm] = nySvar;

        setState( { svar: oppdatertSvar });
    }

    function endreSide(side: string) {
        setPage(side);
    }

    function byggOgSendDialog(sisteStilling: string, mia: KommuneOgLedigeStillinger) {
        const kanFinneJobbTekst = state.svar[KanDuFinneJobbSpm.Id] === '' ? '' : `Kan finne jobb selv: ${state.svar[KanDuFinneJobbSpm.Id]}`;
        const dialog = {
            overskrift: 'Svarene jeg har gitt om mine jobbmuligheter',
            tekst: `Mine jobbmuligheter\n` +
                `Siste stilling: ${sisteStilling}\n` +
                `Antall ledige stillinger innen ${mia.underkategori.kategori} i ${mia.fylkesnavn}: ${mia.underkategori.antallStillinger}\n` +
                `Antall ledige stillinger i kategorien ${mia.hovedkategori.kategori} i ${mia.fylkesnavn}: ${mia.hovedkategori.antallStillinger}\n` +
                `Lett/vanskelig å få jobb: ${state.svar[LettEllerVanskeligSpm.Id]}\n` +
                kanFinneJobbTekst
        };

        setVenterPaDialogResponse(true);

        return postDialog(dialog)
            .then((response: any) => { // tslint:disable-line
                setDialogId(response.dialogId);
                setVenterPaDialogResponse(false);
            })
            .catch(() => {
                setError(true);
            });
    }

    function renderLettVanskeSpmPage() {
        const hvisSvaretErLett = new ConditionalNavigation()
            .navigerTil(KanDuFinneJobbSpm.Id)
            .hvis(state.svar[LettEllerVanskeligSpm.Id] === 'lett' ||
                state.svar[LettEllerVanskeligSpm.Id]=== 'vanskelig' ||
                state.svar[LettEllerVanskeligSpm.Id]=== 'usikker')
            .ellers(ResultatVanskeligAFaJobb.Id);

        return (
            <LettEllerVanskeligSpm
                valgtAlternativ={state.svar[LettEllerVanskeligSpm.Id]}
                endreAlternativ={svarAlternativ => velgSvar(LettEllerVanskeligSpm.Id, svarAlternativ)}
                nextPage={() => endreSide(hvisSvaretErLett.naviger())}
            />
        );
    }

    function renderKanDuFinneJobbSpm(sisteStilling: string, mia: KommuneOgLedigeStillinger) {
        const hvisSvaretErJa = new ConditionalNavigation()
            .navigerTil(ResultatLettAFaJobb.Id)
            .hvis(state.svar[KanDuFinneJobbSpm.Id] === 'ja')
            .ellers(ResultatVanskeligAFaJobb.Id);

        return (
            <KanDuFinneJobbSpm
                valgtAlternativ={state.svar[KanDuFinneJobbSpm.Id]}
                endreAlternativ={(svar) => velgSvar(KanDuFinneJobbSpm.Id, svar)}
                nextPage={() => endreSide(hvisSvaretErJa.naviger())}
                byggOgSendDialog={() => byggOgSendDialog(sisteStilling, mia)}
            />
        );
    }

    function renderPage(sisteStilling: string, mia: KommuneOgLedigeStillinger) {

        if (error) {
            return <div className="spinner-wrapper centered"><Feilmelding/></div>;
        }
        else if (venterPaDialogResponse) {
            return <div className="spinner-wrapper centered"><NavFrontendSpinner type="XXL"/></div>;
        }

        switch (page) {
            case LettEllerVanskeligSpm.Id:
                return renderLettVanskeSpmPage();

            case KanDuFinneJobbSpm.Id:
                return renderKanDuFinneJobbSpm(sisteStilling, mia);

            case ResultatLettAFaJobb.Id:
                console.log("render result lett dialogid", dialogId);
                return <ResultatLettAFaJobb dialogId={dialogId} />;

            case ResultatVanskeligAFaJobb.Id:
                console.log("render result vanskelig dialogid", dialogId);
                return <ResultatVanskeligAFaJobb dialogId={dialogId} />;

            default:
                return (
                    <StillingInfo
                        stillingKategori={mia.hovedkategori.kategori}
                        sisteStilling={mia.underkategori.kategori}
                        antallStillinger={mia.underkategori.antallStillinger}
                        antallIKategorien={mia.hovedkategori.antallStillinger}
                        onClick={() => setPage(LettEllerVanskeligSpm.Id)}
                    />
                );
        }
    }

    return (
        <AppProviders>
            <Banner/>
            <KommuneOgLedigeStillingerContext.Consumer>
                {mia =>
                    <SisteStillingContext.Consumer>
                        {stilling => renderPage(stilling.sisteStilling.label, mia)}
                    </SisteStillingContext.Consumer>
                }
            </KommuneOgLedigeStillingerContext.Consumer>
        </AppProviders>
    );

}

export default App;
