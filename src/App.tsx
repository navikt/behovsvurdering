import * as React from 'react';
import './App.css';
import {fetchData} from "./utils/fetchData";

interface SisteArbeidsforhold {
    sisteStilling : {
        label: string,
        konseptId: number,
        styrk08: string,
    },
}

class App extends React.Component<{}, SisteArbeidsforhold> {

    constructor(props: {}) {
        super(props);
        this.state = { sisteStilling: {
            label: "",
            konseptId: 0,
            styrk08: "",
            }};
    }


    componentDidMount() {
        fetchData<SisteArbeidsforhold>("/veilarbregistrering/api/registrering").then(
            data => {
                this.setState(data);
            }
        )

    }

    render() {
        return (
            <div className="App">
                {this.state.sisteStilling.label}
            </div>
        );
    }
}

export default App;
