import React from 'react';
import { PagesProps } from '../PagesTypes';
import Oppsumering from './Oppsumering';

export const PAGE_ID = 'ja_oppsumering';

function JaOppsumering(props: PagesProps) {
    const tekst = 'Veilederen din vil kontakte deg for å avtale veien videre i løpet av noen dager.';
    return <Oppsumering dialogId={props.state.dialogId!} tekst={tekst}/>;
}

export default JaOppsumering;