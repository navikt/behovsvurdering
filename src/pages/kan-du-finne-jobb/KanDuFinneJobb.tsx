import * as React from "react";

import AlternativGruppe from "../../components/alternativ-gruppe/alternativ-gruppe";
import { Row, Column, Container } from 'nav-frontend-grid'

interface KanDuFinneJobbSpmProps {
    nextPage?: () => void,
    endreAlternativ: (arg: string) => void,
    valgtAlternativ: string
}

class KanDuFinneJobbSpm extends React.Component<KanDuFinneJobbSpmProps> {

    static Id = "finne-jobb";

    constructor(props: KanDuFinneJobbSpmProps) {
        super(props);
    }

    onChange = (value: string) => {
        this.props.endreAlternativ(value);
    };

    render() {
        return (
            <Container>
                <Row className="">
                    <Column>

                    </Column>
                </Row>
                <Row className="">
                    <AlternativGruppe
                        label="Kan du finne jobb selv?"
                        gruppeId={KanDuFinneJobbSpm.Id}
                        onChange={this.onChange}
                        valgtAlternativ={() => this.props.valgtAlternativ}
                        options={
                            [
                                {label: "Ja", value: "ja"},
                                {label: "Nei", value: "nei"},
                                {label: "Usikker", value: "usikker"}
                            ]
                        }
                        nextPage={this.props.nextPage}
                        nextPageBtnText="Neste"
                    />
                </Row>
            </Container>
        );
    }
}

export default KanDuFinneJobbSpm;