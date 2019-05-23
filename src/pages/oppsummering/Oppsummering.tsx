import React from 'react';
import './Oppsummering.less';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { AlertStripeSuksess } from 'nav-frontend-alertstriper';
import { linkMetrikk } from '../../metrikker/frontendlogger';

interface Props {
    dialogId: string;
    tekst: string;
    children?: React.ReactNode;
    panel?: string;
}

function Oppsummering(props: Props) {
    return (
        <>
            <div className="beholder oppsummering">

                <div className="rad">
                    <AlertStripeSuksess>
                        <Normaltekst>
                            Svaret ditt er&nbsp;
                            <a
                                href={`aktivitetsplan/dialog/${props.dialogId}`}
                                onClick={() => linkMetrikk('dialog-lenke', props.panel)}
                            >
                                delt med veilederen din
                            </a>&nbsp;
                            som nå vil vurdere:
                        </Normaltekst>
                        <ul>
                            <li>jobbmulighetene dine</li>
                            <li>hvor mye hjelp du trenger for å komme i jobb</li>
                        </ul>
                        {props.tekst}
                    </AlertStripeSuksess>
                </div>
            </div>
            <div className="beholder fill-height">
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
