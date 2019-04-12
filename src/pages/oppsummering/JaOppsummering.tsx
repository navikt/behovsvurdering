import React from 'react';
import { PagesProps } from '../PagesTypes';
import Oppsummering from './Oppsummering';

export const PAGE_ID = 'ja_oppsummering';

function JaOppsummering(props: PagesProps) {
    const tekst = 'Veilederen din vil kontakte deg for å avtale veien videre i løpet av noen dager.';
    return <Oppsummering dialogId={props.state.dialogId!} tekst={tekst}/>;
}

export default JaOppsummering;