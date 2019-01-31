import * as React from "react";

import AlternativGruppe from "../../components/alternativ-gruppe/AlternativGruppe";
import { Row, Container } from 'nav-frontend-grid'
import InfoPanel from "../../components/infopanel/InfoPanel";

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
            <Container className="kan-du-finne-jobb-container">
                <Row className="">
                    <InfoPanel type="info-sirkel-fyll">
                        Utfra informasjonen du har gitt oss og det vi vet om arbeidssøkere i omtrent samme
                        situasjon, mener vi at du har gode muligheter til å finne ny jobb.
                    </InfoPanel>
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