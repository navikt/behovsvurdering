import * as React from "react";
import { Normaltekst } from 'nav-frontend-typografi';

//@ts-ignore
import Icon from 'nav-frontend-ikoner-assets';

interface InfoPanelProps {
    children: string
}

function InfoPanel(props: InfoPanelProps) {
    return (
        <div className="spm-info">
                <span className="spm-info__ikon" aria-label="info">
                    <Icon kind="info-sirkel-fyll" size="1.5em"/>
                </span>
            <Normaltekst>
                { props.children }
            </Normaltekst>
        </div>
    );
}


export default InfoPanel;