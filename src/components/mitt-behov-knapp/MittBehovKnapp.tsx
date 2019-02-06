import * as React from 'react';
import { Hovedknapp } from 'nav-frontend-knapper';

interface Props {
    onClick?: () => void;
}

export default class MittBehovKnapp extends React.Component<Props> {
    render() {
        return (
            <div id="mitt-behov-knapp">
                <Hovedknapp onClick={this.props.onClick}>
                    Neste
                </Hovedknapp>
            </div>
        );
    }
}