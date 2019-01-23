import * as React from "react";

import { RadioPanel } from 'nav-frontend-skjema'
import { Hovedknapp } from 'nav-frontend-knapper';
import { Innholdstittel } from 'nav-frontend-typografi';
import { Row, Column, Container } from 'nav-frontend-grid'
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper'

interface AlternativGruppeProps {
    label: string,
    options: any[],
    gruppeId: string,
    onChange: (string) => void,
    valgtAlternativ: () => string,
    nextPage?: () => void,
    nextPageBtnText?: string
}

interface State {
    advarsel: boolean;
}

class AlternativGruppe extends React.Component<AlternativGruppeProps, State> {

    constructor(props: AlternativGruppeProps) {
        super(props);
        this.state = {advarsel: false};
    }

    lagSpmGruppe() {
        return this.props.options.map(key => {
            return <Column md='6' xs='12' key={'col-' + key.value}>
                <RadioPanel
                    onChange={() => this.props.onChange(key.value)}
                    inputProps={{className: 'blokk-xs'}}
                    name={'alternativ'}
                    label={key.label}
                    value={key.value}
                    checked={this.props.valgtAlternativ() === key.value}
                />
            </Column>
        })
    }

    duMaaSvareAdvarsel(e) {
        if (this.props.valgtAlternativ() === '') {
            e.preventDefault();
            this.setState({ advarsel: true });
        } else {
            this.setState({ advarsel: false });
            if (this.props.nextPage) this.props.nextPage();
        }
    }

    static lagAdvarsel() {
        return (
            <AlertStripeAdvarsel>
                Du må svare på spørsmålet før du kan gå videre.
            </AlertStripeAdvarsel>
        );
    }

    lagNesteKnapp() {
        if (!this.props.nextPage) return;

        return (
            <Row className=''>
                <Column xs='12' className="centered">
                    <Hovedknapp onClick={(e) => this.duMaaSvareAdvarsel(e)}>
                        {this.props.nextPageBtnText}
                    </Hovedknapp>
                </Column>
            </Row>
        );
    }

    render() {
        return (
            <Container fluid={false} className="container-row-padding">

                <Row className='centered'>
                    <Column xs='10' md='7'>
                        <Innholdstittel tag="h1">
                            { this.props.label }
                        </Innholdstittel>
                    </Column>
                </Row>

                <Row className="alternativGruppe">
                    {
                        this.lagSpmGruppe()
                    }
                </Row>

                <Row className=''>
                    {this.state.advarsel ? AlternativGruppe.lagAdvarsel() : <div />}
                </Row>

                {
                    this.lagNesteKnapp()
                }

            </Container>
        );
    }
}


export default AlternativGruppe;