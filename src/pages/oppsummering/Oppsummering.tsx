import React from 'react';
import DialogTekst from '../../components/dialog-lenke/DialogTekst';
import './Oppsummering.less';
import { Undertittel } from 'nav-frontend-typografi';

interface Props {
    dialogId: string;
    tekst: string;
    children?: React.ReactNode;
}

function Oppsummering(props: Props) {
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
                    <div className="anbefaling">
                        <Undertittel className="anbefaling-tittel">
                            Dette anbefaler vi deg å gjøre nå
                        </Undertittel>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Oppsummering;
