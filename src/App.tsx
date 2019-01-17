import * as React from 'react';
import StillingInfo from "./StillingInfo";
import AppProviders from "./AppProvider";
import Banner from "./Banner";
import BehovsvurderingsContainer from "./BehovsvurderingContainer";




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
