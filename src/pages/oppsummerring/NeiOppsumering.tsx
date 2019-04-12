import React from 'react';
import { PagesProps } from '../PagesTypes';
import Oppsumering from './Oppsumering';

export const PAGE_ID = 'nei_oppsumering';

function NeiOppsumering(props: PagesProps) {
    const tekst = 'Hvis situasjon din endrer seg, kan du ta kontakt. Lykke til i jobbsøkingen!';
    return <Oppsumering dialogId={props.state.dialogId!} tekst={tekst}/>;
}

export default NeiOppsumering;