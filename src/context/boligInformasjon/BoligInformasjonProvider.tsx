import * as React from 'react';
import BoligInformasjonType from "../../datatyper/boligInformasjon";
import {hentBoligInformasjon} from "../../api/api";

export const initalStateBoligInformasjon: BoligInformasjonType = {
    sisteStilling : {
        label: "",
        konseptId: 0,
        styrk08: "",
    },
};

const BoligInformasjonContext = React.createContext<BoligInformasjonType>(initalStateBoligInformasjon);

interface BoligInformasjonProviderProps {
    children: null | React.ReactNode | React.ReactChild | React.ReactChildren
}


class SisteStillingProvider extends React.Component<BoligInformasjonProviderProps, BoligInformasjonType> {
    state = initalStateBoligInformasjon;

    componentDidMount() {
        hentBoligInformasjon()
            .then(registeringsData => {
                this.setState({sisteStilling :registeringsData.sisteStilling});
            })
    }


    render() {
        const context: BoligInformasjonType = {
            sisteStilling: this.state.sisteStilling
        };

        return (
            <BoligInformasjonContext.Provider value={context}>
                {this.props.children}
            </BoligInformasjonContext.Provider>

        )
    }

}

//TODO FIKS TYPER
export const boligInformasjonConsumerHoc = (Component: any) => {
    return (props: any) => (
        <BoligInformasjonContext.Consumer>
            {context => {
                return <Component {...props} context ={context} />;
            }}
        </BoligInformasjonContext.Consumer>
    );
};

export default SisteStillingProvider;