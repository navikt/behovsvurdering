import * as React from "react";
import DeltMedNavInfoPanel from "../../components/del-med-nav-infopanel/DeltMedNavInfoPanel";

interface ResultatVanskeligAFaJobbProps {
    dialogId: string
}

class ResultatVanskeligAFaJobb extends React.Component<ResultatVanskeligAFaJobbProps> {

    static Id = "resultat-vanskelig-afa-jobb";

    render() {
        return (
            <DeltMedNavInfoPanel modus="ikke-lett" dialogId={this.props.dialogId} />
        );
    }
}

export default ResultatVanskeligAFaJobb;