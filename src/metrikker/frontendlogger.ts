export interface Frontendlogger {
	event: (name: string, fields: object, tags: object) => void;
}

export function frontendLogger(eventNavn: string, feltObjekt?: object, tagObjekt?: object) {
	const frontendlogger: Frontendlogger = (window as any).frontendlogger; // tslint:disable-line
	if (frontendlogger) {
		frontendlogger.event(eventNavn, feltObjekt || {}, tagObjekt || {});
	}
}

export function vurderingsMetrikk(value: string, innsatsgruppe: string | null) {
	frontendLogger('behovsvurdering.kontaktNavForJobb', undefined, {
		valg: value,
		innsatsgruppe
	});
}

export function hvilkenVeiledningSendtMetrikk() {
	frontendLogger('behovsvurdering.hvilkenVeiledingSendt');
}

export function linkMetrikk(link: string, panel?: string) {
	frontendLogger('behovsvurdering.anbefalingslink', undefined, {
		link: link,
		panel: panel
	});
}
