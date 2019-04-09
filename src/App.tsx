import React, { useState } from 'react';
import OnskerDuAKontakteEnNavVeileder, { PAGE_ID as NAV_KONTAKT_PAGE_ID } from './pages/OnskerDuAKontakteEnNavVeileder';
import Oppsumering, { PAGE_ID as OPPSUMERING_PAGE_ID } from './pages/Oppsumering';
import HvilkenVeiledningTrengerDu, { PAGE_ID as VEILEDNING_PAGE_ID } from './pages/HvilkenVeiledningTrengerDu';
import { PagesProps, PagesState } from './pages/PagesTypes';
import './App.less';

const initalState: PagesState = {
    pageId: NAV_KONTAKT_PAGE_ID
};

function getCurrentPage(appState: PagesState): ((props: PagesProps) => JSX.Element) {
    switch (appState.pageId) {
        case NAV_KONTAKT_PAGE_ID:
            return OnskerDuAKontakteEnNavVeileder;
        case OPPSUMERING_PAGE_ID:
            return Oppsumering;
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
        <div className="app">
            <Page setState={setValue} state={value}/>
        </div>
    );
}

export default App;
