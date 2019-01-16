import * as React from 'react';
import {SisteStillingType} from "./sisteStillingTyper";
import {fetchData} from "../../utils/fetchData";


const API_VEILARBREGISTRERING = "/veilarbregistrering/api/registrering";

export const dummyStilling: SisteStillingType = {
    sisteStilling : {
        label: "",
        konseptId: 0,
        styrk08: "",
    },
};

const SisteStillingContext = React.createContext<SisteStillingType>(dummyStilling);


class SisteStillingProvider extends React.Component<{}, SisteStillingType> {

    constructor(props={}) {
        super(props);
        this.state = dummyStilling;
        this.hentSisteStilling = this.hentSisteStilling.bind(this);
    }

    hentSisteStilling() {
        fetchData<SisteStillingType>(API_VEILARBREGISTRERING)
            .then(registeringsData => {
                this.setState({sisteStilling :registeringsData.sisteStilling});
            });
    }

    componentDidMount() {
        this.hentSisteStilling();
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
                return <Component {...props} {...context} />;
            }}
        </SisteStillingContext.Consumer>
    );
};

export default SisteStillingProvider;