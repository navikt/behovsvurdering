import * as React from 'react';
import StillingInfo from "./components/stillingsinfo/StillingInfo";
import AppProviders from "./AppProvider";
import Banner from "./components/banner/Banner";
import BehovsvurderingsContainer from "./containers/BehovsvurderingContainer";

import LettEllerVanskeligSpm from "./pages/lett-vanskelig/LettEllerVanskeligSpm";
import MittBehovKnapp from './components/mitt-behov-knapp/MittBehovKnapp';

interface State {
    page?: string
}

interface AppProps {

}

class App extends React.Component<AppProps, State> {

    constructor(props: AppProps) {
        super(props);
        this.state = { page: '' };
    }

    renderPage() {
        if (this.state.page === 'lett-vanskelig') {
            return <LettEllerVanskeligSpm nextPage={ () => this.setState({page: '' }) } />;
        }

        // default page
        return (
            <div>
                <StillingInfo />
                <MittBehovKnapp onClick={ () => this.setState({page: 'lett-vanskelig' })}  />
            </div>
        );
    }

    render() {
        return (
            <AppProviders>
                <BehovsvurderingsContainer>
                    <Banner/>
                    { this.renderPage() }
                </BehovsvurderingsContainer>
            </AppProviders>
        );
    }
}

export default App;
