import * as React from "react";
import { Normaltekst } from 'nav-frontend-typografi';

//@ts-ignore
import Icon from 'nav-frontend-ikoner-assets';

interface InfoPanelProps {
    children: React.ReactNode | React.ReactChild | React.ReactChildren
    type: string,
    className?: string
}

function InfoPanel(props: InfoPanelProps) {
    return (
        <div className={"spm-info " + props.className}>
                <span className="spm-info__ikon" aria-label="info">
                    <Icon kind={props.type} size="1.5em"/>
                </span>
            <Normaltekst >
                { props.children }
            </Normaltekst>
        </div>
    );
}


export default InfoPanel;