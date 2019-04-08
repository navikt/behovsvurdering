import React from 'react';
import OnskerDuAKontakteEnNavVeileder, {PAGE_ID} from "./pages/onsker-du-a-kontakte-en-nav-veileder/OnskerDuAKontakteEnNavVeileder";
import './App.less';

interface AppState {
    pageId: string;
}

const initalState: AppState = {
    pageId: PAGE_ID
};

function getCurrentPage(appState: AppState): ((props: any) => JSX.Element){
    switch (appState.pageId) {
        case PAGE_ID: return OnskerDuAKontakteEnNavVeileder;
        default: return () => <div></div>;
    }
}


function App() {
    // const [value] = useState(initalState);
    const Page = getCurrentPage(initalState);

    return <div className="app">
        <Page/>
    </div>
}

export default App;
