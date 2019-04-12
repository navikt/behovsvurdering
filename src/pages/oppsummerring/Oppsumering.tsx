import React from 'react';
import Anbefaling from '../../components/anbefaling/Anbefaling';
import DialogTekst from '../../components/dialog-lenke/DialogTekst';
import './Oppsummering.less';

interface Props {
    dialogId: string;
    tekst: string;
}

function Oppsumering(props: Props) {
    return (
        <>
            <div className="beholder oppsummering">
                <div className="rad">
                    <div className="rad-item">
                        <DialogTekst dialogId={props.dialogId!}/>
                        {props.tekst}
                    </div>
                </div>
            </div>
            <div className="beholder gray fill-height">
                <div className="rad">
                    <Anbefaling className="rad-item"/>
                </div>
            </div>
        </>
    );
}

export default Oppsumering;