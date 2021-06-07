import { createFrontendLogger } from '@navikt/frontendlogger/lib';
import { APP_NAME } from './constants';

const logger = createFrontendLogger(APP_NAME, '/proxy/frontendlogger/api');

export const logError = (fields?: {}, tags?: {}): void => {
	logger.event(`${APP_NAME}.error`, fields, tags);
};

const logMetrikk = (metrikkNavn: string, fields?: {}, tags?: {}): void => {
	logger.event(`${APP_NAME}.metric.${metrikkNavn}`, fields, tags);
};

export function logVurderingsMetrikk(value: string, innsatsgruppe: string | null) {
	logMetrikk('kontaktNavForJobb', undefined, {
		valg: value,
		innsatsgruppe
	});
}

export function logHvilkenVeiledningSendtMetrikk() {
	logMetrikk('hvilkenVeiledingSendt');
}

export function logLinkTrykketMetrikk(link: string, panel?: string) {
	logMetrikk('anbefalingslink', undefined, {
		link: link,
		panel: panel
	});
}
