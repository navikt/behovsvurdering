import * as React from "react";
import DeltMedNavInfoPanel from "../../components/del-med-nav-infopanel/DeltMedNavInfoPanel";

interface ResultatLettAFaJobbProps {
    dialogId: string
}

class ResultatLettAFaJobb extends React.Component<ResultatLettAFaJobbProps> {

    static Id = "resultat-lett-afa-jobb";

    render() {
        return (
            <DeltMedNavInfoPanel modus="lett" dialogId={this.props.dialogId} />
        );
    }
}

export default ResultatLettAFaJobb;