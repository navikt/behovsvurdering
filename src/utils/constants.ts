import { erProduksjon } from './er-produksjon';
const url = window && window.location && window.location.href ? window.location.href : '';

export const APP_NAME = 'behovsvurdering';

export const DITT_NAV_URL = erProduksjon(url) ? 'https://www.nav.no/person/dittnav' : 'https://www.dev.nav.no/person/dittnav';
