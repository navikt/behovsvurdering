import React, { useState } from 'react';
import OnskerDuAKontakteEnNavVeileder, { PAGE_ID as NAV_KONTAKT_PAGE_ID } from './pages/onsker-du-a-kontakte-en-nav-veileder/OnskerDuAKontakteEnNavVeileder';
import HvilkenVeiledningTrengerDu, { PAGE_ID as VEILEDNING_PAGE_ID } from './pages/hvilken-veiledning-trenger-du/HvilkenVeiledningTrengerDu';
import JaOppsummering, { PAGE_ID as JA_OPPSUMMERING_PAGE_ID } from './pages/oppsummering/JaOppsummering';
import NeiOppsummering, { PAGE_ID as NEI_OPPSUMMERING_PAGE_ID } from './pages/oppsummering/NeiOppsummering';
import { PagesProps, PagesState } from './pages/PagesTypes';
import './App.less';

const initalState: PagesState = {
    pageId: NAV_KONTAKT_PAGE_ID
};

function getCurrentPage(appState: PagesState): ((props: PagesProps) => JSX.Element) {
    switch (appState.pageId) {
        case NAV_KONTAKT_PAGE_ID:
            return OnskerDuAKontakteEnNavVeileder;
        case JA_OPPSUMMERING_PAGE_ID:
            return JaOppsummering;
        case NEI_OPPSUMMERING_PAGE_ID:
            return NeiOppsummering;
        case VEILEDNING_PAGE_ID:
            return HvilkenVeiledningTrengerDu;
        default:
            throw new Error('unsupported page');
    }
}

function App() {
    const [value, setValue] = useState(initalState);
    const Page = getCurrentPage(value);

    return (
            <Page setState={setValue} state={value}/>
    );
}

export default App;
