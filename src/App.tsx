import { useEffect, useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import OnskerDuAKontakteEnNavVeileder
    from './pages/onsker-du-a-kontakte-en-nav-veileder/OnskerDuAKontakteEnNavVeileder';
import HvilkenVeiledningTrengerDu, { PAGE_ID as VEILEDNING_PAGE_ID } from './pages/hvilken-veiledning-trenger-du/HvilkenVeiledningTrengerDu';
import JaOppsummering, { PAGE_ID as JA_OPPSUMMERING_PAGE_ID } from './pages/oppsummering/JaOppsummering';
import NeiOppsummering, { PAGE_ID as NEI_OPPSUMMERING_PAGE_ID } from './pages/oppsummering/NeiOppsummering';
import { PagesState } from './pages/PagesTypes';
import PageChangeListener from './components/pange-change-listener/PageChangeListener';
import './App.less';
import {
    API_VEILARBOPPFOLGING_UNDER_OPPFOLGING,
    hentRegistreringData,
    settWindowInnsatsGruppe,
    UnderOppfolgingData
} from './api/api';
import useFetch from './api/use-fetch';
import { hasData, hasFailed, isNotStartedOrPending } from './api/utils';
import Spinner from './components/spinner/spinner';
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';

function App() {
    const underOppfolging = useFetch<UnderOppfolgingData>();
    const [value, setValue] = useState<PagesState>({});
    const erUnderOppfolging = hasData(underOppfolging) && underOppfolging.data.underOppfolging;

    useEffect(() => {
        hentRegistreringData()
            .then(response => settWindowInnsatsGruppe(response.registrering));

        underOppfolging.fetch(API_VEILARBOPPFOLGING_UNDER_OPPFOLGING);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isNotStartedOrPending(underOppfolging)) {
        return <Spinner center={true}/>;
    } else if (hasFailed(underOppfolging)) {
        return (
            <AlertStripeAdvarsel className="underoppfolging__feilmelding">
                Fikk ikke kontakt med baksystem. Prøv igjen senere.
            </AlertStripeAdvarsel>
        );
    } else if (!erUnderOppfolging) {
        return (
            <AlertStripeAdvarsel className="underoppfolging__feilmelding">
                Du må være registrert hos NAV for å bruke denne tjenesten.
            </AlertStripeAdvarsel>
        );
    }

    return (
        <BrowserRouter>
            <Route
                path="/"
                exact={true}
                component={() => <OnskerDuAKontakteEnNavVeileder state={value} setState={setValue}/>}
            />
            <Route
                path={`/${VEILEDNING_PAGE_ID}`}
                component={() => <HvilkenVeiledningTrengerDu state={value} setState={setValue}/>}
            />
            <Route
                path={`/${JA_OPPSUMMERING_PAGE_ID}`}
                component={() => <JaOppsummering state={value} setState={setValue}/>}
            />
            <Route
                path={`/${NEI_OPPSUMMERING_PAGE_ID}`}
                component={() => <NeiOppsummering state={value} setState={setValue}/>}
            />
            <PageChangeListener/>
        </BrowserRouter>
    );
}

export default App;
