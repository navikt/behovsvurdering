import * as React from 'react';
import {fetchData} from "../../utils/fetchData";

const API_VEILARBOPPFOLGING = "/veilarboppfolging/api/oppfolging";

interface OppfolgingStatus {
    underOppfolging: boolean;
}

export const dummyOppfolging: OppfolgingStatus = {
    underOppfolging:false
};

type OppfolgingProviderState = OppfolgingStatus

interface OppfolgingProviderProps {
    children : null | React.ReactNode
}


class OppfolgingProvider extends React.Component<OppfolgingProviderProps, OppfolgingProviderState> {

    constructor(props: OppfolgingProviderProps) {
        super(props);
        this.state = dummyOppfolging;
        this.hentSisteStilling = this.hentSisteStilling.bind(this);
    }

    hentSisteStilling() {
        fetchData<OppfolgingStatus>(API_VEILARBOPPFOLGING)
            .then(oppfolgingData => this.setState({underOppfolging: oppfolgingData.underOppfolging}));
        //feilHantering
    }

    componentDidMount() {
        this.hentSisteStilling();
    }

    render() {

        if(!this.state.underOppfolging) {
            return <div/>
        }

        return (
                this.props.children
        )
    }

}

export default OppfolgingProvider;