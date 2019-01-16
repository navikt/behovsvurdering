import * as React from 'react';
import {fetchData} from "../../utils/fetchData";


interface OppfolgingStatus {
    underOppfolging: boolean;
}

interface OppfolgingStatusKontekstType {
    oppfolgingStatus: OppfolgingStatus;
    hentOppfolging : () => void;
}

export const dummyOppfolging: OppfolgingStatus = {
    underOppfolging:false
};

const OppfolgingContext = React.createContext<OppfolgingStatus>(dummyOppfolging);


class OppfolgingProvider extends React.Component<{}, OppfolgingStatus> {

    constructor(props={}) {
        super(props);
        this.state = dummyOppfolging;
        this.hentSisteStilling = this.hentSisteStilling.bind(this);
    }

    hentSisteStilling() {
        fetchData<OppfolgingStatus>("/veilarbregistrering/api/registrering") //API
            .then(data => this.setState(data));
        //feilHantering
    }

    componentDidMount() {
        this.hentSisteStilling();
    }

    render() {

        const context: OppfolgingStatus = {
            underOppfolging: this.state.underOppfolging
        };

        return (
            <OppfolgingContext.Provider value={context}>
                {this.props.children}
            </OppfolgingContext.Provider>

        )
    }

}

export default OppfolgingProvider;