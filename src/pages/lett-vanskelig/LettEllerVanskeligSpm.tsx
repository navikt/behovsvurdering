import * as React from "react";

import AlternativGruppe from "../../components/alternativ-gruppe/alternativ-gruppe";

interface LettEllerVanskeligSpmProps {
    children?: null | React.ReactNode | React.ReactChild | React.ReactChildren
    nextPage?: () => void,
}

interface State {
    svar: string;
}

class LettEllerVanskeligSpm extends React.Component<LettEllerVanskeligSpmProps, State> {

    constructor(props: LettEllerVanskeligSpmProps) {
        super(props);
        this.state = { svar: '' };
    }

    onChange = (value: string) => {
        this.setState({ svar: value });
    };

    render() {
        return (
            <AlternativGruppe
                label="Hvor lett eller vanskelig tror du det er for deg å få jobb i dagens arbeidsmarked?"
                gruppeId=""
                onChange={this.onChange}
                valgtAlternativ={() => this.state.svar}
                options={
                    [
                        {label: "Lett", value: "lett"},
                        {label: "Vanskelig", value: "vanskelig"},
                        {label: "Usikker", value: "usikker"}
                    ]
                }
                nextPage={this.props.nextPage}
                nextPageBtnText="Del med NAV"
             />
        );
    }
}


export default LettEllerVanskeligSpm;