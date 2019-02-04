import * as React from 'react';
import { Row, Column } from 'nav-frontend-grid';
import { Innholdstittel } from 'nav-frontend-typografi';

interface Props {
    label: string;
}

export default class AlternativGruppeTittel extends React.Component<Props> {
    render() {
        return (
            <Row className="centered">
                <Column xs="10" md="7">
                    <Innholdstittel tag="h1" className="alternativGruppeTittel">
                        {this.props.label}
                    </Innholdstittel>
                </Column>
            </Row>
        );
    }
}