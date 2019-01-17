import * as React from 'react';
import StillingInfo from "./StillingInfo";
import AppProviders from "./context/AppProvider";
import Banner from "./Banner";




class App extends React.Component {
    render() {
        return (
            <AppProviders>
                <div className="wrapper">
                    <Banner/>
                    <StillingInfo/>
                </div>
            </AppProviders>
        );
    }
}

export default App;
