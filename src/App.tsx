import * as React from 'react';
import StillingInfo from "./StillingInfo";
import AppProviders from "./context/AppProvider";




class App extends React.Component {
    render() {
        return (
            <AppProviders>
                <div className="wrapper">
                    <StillingInfo/>
                </div>
            </AppProviders>
        );
    }
}

export default App;
