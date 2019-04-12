import React from 'react';
import { PagesProps } from '../PagesTypes';
import Oppsummering from './Oppsummering';

export const PAGE_ID = 'nei_oppsummering';

function NeiOppsummering(props: PagesProps) {
    const tekst = 'Hvis situasjon din endrer seg, kan du ta kontakt. Lykke til i jobbsøkingen!';
    return <Oppsummering dialogId={props.state.dialogId!} tekst={tekst}/>;
}

export default NeiOppsummering;