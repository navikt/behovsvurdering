import React from 'react';
import { PagesProps } from '../PagesTypes';
import Oppsummering from './Oppsummering';
import { Arbeidsplassen, CV, Jobbsokertips } from '../../components/anbefaling/Anbefaling';

export const PAGE_ID = 'ja_oppsummering';

function JaOppsummering(props: PagesProps) {
    const tekst = 'Veilederen vil kontakte deg i løpet av noen dager.';
    return (
        <Oppsummering dialogId={props.state.dialogId!} tekst={tekst}>
            <CV
                tekst="Veilederen din trenger å kjenne til arbeidserfaringen din."
                panel="ja"
            />
            <Arbeidsplassen panel="ja"/>
            <Jobbsokertips panel="ja"/>
        </Oppsummering>
    );
}

export default JaOppsummering;
