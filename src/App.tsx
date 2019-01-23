import * as React from 'react';
import StillingInfo from "./components/stillingsinfo/StillingInfo";
import AppProviders from "./AppProvider";
import Banner from "./components/banner/Banner";
import BehovsvurderingsContainer from "./containers/BehovsvurderingContainer";

import { Hovedknapp } from 'nav-frontend-knapper';
import { Row, Column, Container } from 'nav-frontend-grid'
import LettEllerVanskeligSpm from "./pages/lett-vanskelig/LettEllerVanskeligSpm";

interface Props {
    onClick?: () => void
}

class StartPage extends React.Component<Props> {
    render() {
        return (
            <div>
                <StillingInfo/>
                <Container fluid={false}>
                    <Row className=''>
                        <Column xs='12' className="centered">
                            <Hovedknapp onClick={this.props.onClick}>
                                Ditt Behov
                            </Hovedknapp>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

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

        return <StartPage onClick={ () => this.setState({page: 'lett-vanskelig' })}  />;
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
