import * as React from 'react';
import OppfolgingStatus from './context/oppfolgningStatus/OppfolgingStatus';
import SisteStillingProvider from './context/sisteStilling/SisteStillingProvider';
import KommuneOgLedigeStillingerProvider from './context/kommuneOgLedigeStillinger/KommuneOgLedigeStillingerProvider';
import GeografiskTilknytningProvider from './context/geografiskTilknytning/GeografiskTilknytningProvider';

interface AppProviderProps {
    children: React.ReactNode;
}

function AppProviders(props: AppProviderProps) {
    return (
        <OppfolgingStatus>
            <SisteStillingProvider>
                <GeografiskTilknytningProvider>
                    <KommuneOgLedigeStillingerProvider>
                        {props.children}
                    </KommuneOgLedigeStillingerProvider>
                </GeografiskTilknytningProvider>
            </SisteStillingProvider>
        </OppfolgingStatus>
    );
}

export default AppProviders;