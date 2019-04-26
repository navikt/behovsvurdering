import React from 'react';
import {PagesProps} from '../PagesTypes';
import Oppsummering from './Oppsummering';
import {Arbeidsplassen, CV, Jobbsokertips} from "../../components/anbefaling/Anbefaling";

export const PAGE_ID = 'ja_oppsummering';

function JaOppsummering(props: PagesProps) {
    const tekst = 'Veilederen din vil kontakte deg for å avtale veien videre i løpet av noen dager.';
    return (
        <Oppsummering dialogId={props.state.dialogId!} tekst={tekst}>
            <CV panel="ja"/>
            <Arbeidsplassen panel="ja"/>
            <Jobbsokertips panel="ja"/>
        </Oppsummering>
    );
}

export default JaOppsummering;
