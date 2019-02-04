import * as React from 'react';
import DeltMedNavInfoPanel from '../../components/del-med-nav-infopanel/DeltMedNavInfoPanel';

interface ResultatLettAFaJobbProps {

}

class ResultatLettAFaJobb extends React.Component<ResultatLettAFaJobbProps> {

    static Id = 'resultat-lett-afa-jobb';

    render() {
        return (
            <DeltMedNavInfoPanel modus="lett">

            </DeltMedNavInfoPanel>
        );
    }
}

export default ResultatLettAFaJobb;