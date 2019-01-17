import * as React from 'react';
import {hentOppfolgingStatus, OppfolgingStatusType} from './api/api';

export const inialStateOppfolging: OppfolgingStatusType = {
    underOppfolging: false
};

type OppfolgingProviderState = OppfolgingStatusType;

interface OppfolgingProviderProps {
    children: null | React.ReactNode | React.ReactChild | React.ReactChildren
}


class OppfolgingStatus extends React.Component<OppfolgingProviderProps, OppfolgingProviderState> {
    state = inialStateOppfolging;

    componentDidMount() {
        hentOppfolgingStatus()
            .then(oppfolgingData =>
                this.setState({underOppfolging: oppfolgingData.underOppfolging})
            );
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

export default OppfolgingStatus;