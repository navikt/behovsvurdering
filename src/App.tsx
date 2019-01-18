import * as React from 'react';
import StillingInfo from "./components/stillingsinfo/StillingInfo";
import AppProviders from "./AppProvider";
import Banner from "./components/banner/Banner";
import BehovsvurderingsContainer from "./containers/BehovsvurderingContainer";

class App extends React.Component {
    render() {
        return (
            <AppProviders>
                <BehovsvurderingsContainer>
                    <Banner/>
                    <StillingInfo/>
                </BehovsvurderingsContainer>
            </AppProviders>
        );
    }
}

export default App;
