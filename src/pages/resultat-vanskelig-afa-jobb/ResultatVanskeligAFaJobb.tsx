import * as React from "react";
import DeltMedNavInfoPanel from "../../components/del-med-nav-infopanel/DeltMedNavInfoPanel";

interface ResultatVanskeligAFaJobbProps {

}

class ResultatVanskeligAFaJobb extends React.Component<ResultatVanskeligAFaJobbProps> {

    static Id = "resultat-vanskelig-afa-jobb";

    render() {
        return (
            <DeltMedNavInfoPanel modus="ikke-lett">

            </DeltMedNavInfoPanel>
        );
    }
}

export default ResultatVanskeligAFaJobb;