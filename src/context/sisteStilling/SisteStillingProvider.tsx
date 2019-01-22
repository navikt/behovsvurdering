import * as React from 'react';
import {hentSisteStilling} from "../../api/api";
import SisteStillingType from "../../datatyper/sisteStillingFraRegistrering";

export const initalStateStilling: SisteStillingType = {
    sisteStilling : {
        label: "",
        konseptId: 0,
        styrk08: "",
    },
};

const SisteStillingContext = React.createContext<SisteStillingType>(initalStateStilling);

interface SisteStillingProviderProps {
    children: null | React.ReactNode | React.ReactChild | React.ReactChildren
}


class SisteStillingProvider extends React.Component<SisteStillingProviderProps, SisteStillingType> {
    state = initalStateStilling;

    componentDidMount() {
        hentSisteStilling()
            .then(registeringsData => {
                this.setState({sisteStilling :registeringsData.sisteStilling});
            })
    }


    render() {

        const context: SisteStillingType = {
            sisteStilling: this.state.sisteStilling
        };

        return (
            <SisteStillingContext.Provider value={context}>
                {this.props.children}
            </SisteStillingContext.Provider>

        )
    }

}

//TODO FIKS TYPER
export const sisteStillingConsumerHoc = (Component: any) => {
    return (props: any) => (
        <SisteStillingContext.Consumer>
            {context => {
                return <Component {...props} context ={context} />;
            }}
        </SisteStillingContext.Consumer>
    );
};

export default SisteStillingProvider;