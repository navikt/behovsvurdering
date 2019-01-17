import * as React from 'react';
import SisteStillingProvider from "./context/sisteStilling/SisteStillingProvider";
import OppfolgingStatus from "./OppfolgingStatus";


interface AppProviderProps {
    children: null | React.ReactNode | React.ReactChild | React.ReactChildren
}

function AppProviders(props: AppProviderProps) {
    return (
        <OppfolgingStatus>
            <SisteStillingProvider>
                {props.children}
            </SisteStillingProvider>
        </OppfolgingStatus>
    )
}


export default AppProviders;