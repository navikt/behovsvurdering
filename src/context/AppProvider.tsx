import * as React from 'react';
import SisteStillingProvider from "./sisteStilling/SisteStillingProvider";
import OppfolgingProvider from "./oppfolging/OppfolgingProvider";


interface AppProviderProps {
    children: React.ReactNode
}

function AppProviders(props: AppProviderProps) {
    return (
        <OppfolgingProvider>
            <SisteStillingProvider>
                {props.children}
            </SisteStillingProvider>
        </OppfolgingProvider>
    )
}


export default AppProviders;