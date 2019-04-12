import React from 'react';
import {Element} from 'nav-frontend-typografi'
import circleSVG from './check-circle.svg'
import './DialogLenke.less'

interface Props {
    dialogId: string;
}

function DialogTekst(props: Props) {
    return (
        <div className="dialog-lenke">
            <img src={circleSVG} className="dialog-lenke-ikon"/>
            <Element>
                Svaret ditt er&nbsp;
                <a href={`aktivitetsplan/dialog/${props.dialogId}`}>delt i dialogen.</a>
            </Element>
        </div>
    );
}

export default DialogTekst