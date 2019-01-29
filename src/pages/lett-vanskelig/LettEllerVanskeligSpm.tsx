import * as React from "react";

import AlternativGruppe from "../../components/alternativ-gruppe/alternativ-gruppe";

interface LettEllerVanskeligSpmProps {
    nextPage?: () => void,
    endreAlternativ: (arg: string) => void,
    valgtAlternativ: string
}

class LettEllerVanskeligSpm extends React.Component<LettEllerVanskeligSpmProps> {

    static Id = "lett-vanskelig";

    constructor(props: LettEllerVanskeligSpmProps) {
        super(props);
    }

    onChange = (value: string) => {
        this.props.endreAlternativ(value);
    };

    render() {
        return (
            <AlternativGruppe
                label="Hvor lett eller vanskelig tror du det er for deg å få jobb i dagens arbeidsmarked?"
                gruppeId={LettEllerVanskeligSpm.Id}
                onChange={this.onChange}
                valgtAlternativ={() => this.props.valgtAlternativ}
                options={
                    [
                        {label: "Lett", value: "lett"},
                        {label: "Vanskelig", value: "vanskelig"},
                        {label: "Usikker", value: "usikker"}
                    ]
                }
                nextPage={this.props.nextPage}
                nextPageBtnText="Neste"
             />
        );
    }
}

export default LettEllerVanskeligSpm;