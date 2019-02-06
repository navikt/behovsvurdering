import * as React from 'react';
import Veilederpanel from '../../components/veilederpanel/VeilederPanel';
import { Ingress} from 'nav-frontend-typografi';

class HotJarSluttSide extends React.Component {

    static Id = 'hotjar-sluttside';

    render() {
        return (
            <div id={HotJarSluttSide.Id}>
                <div id="sluttpanel-blokk">
                    <Veilederpanel>
                        <Ingress tag="h1">Takk for du deltok.</Ingress>
                    </Veilederpanel>
                </div>
            </div>
        );
    }
}

export default HotJarSluttSide;