import * as React from 'react';
import { Row, Column, Container } from 'nav-frontend-grid'
import { Hovedknapp } from 'nav-frontend-knapper';

interface Props {
    onClick?: () => void
}

export default class MittBehovKnapp extends React.Component<Props> {
    render() {
        return (
            <Container fluid={false}>
                <Row className=''>
                    <Column xs='12' className="centered">
                        <Hovedknapp onClick={this.props.onClick}>
                            Ditt Behov
                        </Hovedknapp>
                    </Column>
                </Row>
            </Container>
        );
    }
}