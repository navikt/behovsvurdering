import { erProduksjon } from './er-produksjon';
const url = window && window.location && window.location.href ? window.location.href : '';

function erMock(): boolean {
	return process.env.REACT_APP_MOCK === 'true';
}

export const APP_NAME = 'behovsvurdering';

export const DITT_NAV_URL = erMock()
	? 'https://veientilarbeid.nav.party/demo/index.html?underOppfolging=true&'
	: erProduksjon(url)
	? 'https://www.nav.no/person/dittnav?'
	: 'https://www.dev.nav.no/person/dittnav?';
