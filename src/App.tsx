import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import OnskerDuAKontakteEnNavVeileder  from './pages/onsker-du-a-kontakte-en-nav-veileder/OnskerDuAKontakteEnNavVeileder';
import HvilkenVeiledningTrengerDu, { PAGE_ID as VEILEDNING_PAGE_ID } from './pages/hvilken-veiledning-trenger-du/HvilkenVeiledningTrengerDu';
import JaOppsummering, { PAGE_ID as JA_OPPSUMMERING_PAGE_ID } from './pages/oppsummering/JaOppsummering';
import NeiOppsummering, { PAGE_ID as NEI_OPPSUMMERING_PAGE_ID } from './pages/oppsummering/NeiOppsummering';
import { PagesState } from './pages/PagesTypes';
import PageChangeListener from './components/pange-change-listener/PageChangeListener';
import './App.less';
import { hentRegistreringData, settSessionInnsatsGruppe } from './api/api';

const initalState: PagesState = {};

function App() {
    const [value, setValue] = useState(initalState);

    hentRegistreringData()
        .then(response => settSessionInnsatsGruppe(response.registrering));

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
