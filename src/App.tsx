import * as React from 'react';
import StillingInfo from "./components/stillingsinfo/StillingInfo";
import AppProviders from "./AppProvider";
import Banner from "./components/banner/Banner";
import BehovsvurderingsContainer from "./containers/BehovsvurderingContainer";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Redirect, Switch } from 'react-router';
import LettEllerVanskeligSpm from './pages/LettEllerVanskeligSpm';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Row, Column, Container } from 'nav-frontend-grid'

class Start extends React.Component {
    render() {
        return (
            <div>
                <StillingInfo/>
                <Container fluid={false}>
                    <Row className=''>
                        <Column xs='12' className="centered">
                            <Link to="/lettvanskelig">
                                <Hovedknapp>
                                    Ditt Behov
                                </Hovedknapp>
                            </Link>
                        </Column>
                    </Row>
                </Container>

            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <AppProviders>
                <BehovsvurderingsContainer>
                    <Banner/>
                    <Router basename="/behovsvurdering">
                        <>
                            <Switch>
                                <Route path="/start" component={Start}/>
                                <Route path="/lettvanskelig" component={LettEllerVanskeligSpm}/>
                                <Redirect exact={true} from="/" to="/start"/>
                            </Switch>
                        </>
                    </Router>
                </BehovsvurderingsContainer>
            </AppProviders>
        );
    }
}

export default App;
