import React from 'react';
import {PagesProps} from '../PagesTypes';
import Oppsummering from './Oppsummering';
import {Arbeidsplassen, CV, Jobbsokertips} from "../../components/anbefaling/Anbefaling";

export const PAGE_ID = 'nei_oppsummering';

function NeiOppsummering(props: PagesProps) {
    const tekst = 'Hvis situasjon din endrer seg, kan du ta kontakt. Lykke til i jobbsøkingen!';
    return (
        <Oppsummering dialogId={props.state.dialogId!} tekst={tekst}>
            <CV panel="nei"/>
            <Arbeidsplassen panel="nei"/>
            <Jobbsokertips panel="nei"/>
        </Oppsummering>
    );
}

export default NeiOppsummering;
