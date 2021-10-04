import { erProduksjon } from './er-produksjon';

export const APP_NAME = 'behovsvurdering';

export const DITT_NAV_URL = erProduksjon() ? 'https://www.nav.no/person/dittnav' : 'https://www.dev.nav.no/person/dittnav';
