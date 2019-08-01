import FetchMock, { MiddlewareUtils } from 'yet-another-fetch-mock';
import { opprettDialog } from './dialog';
import { sendSvar } from './behovsvurdering';
import { registrering } from './registrering';
import underOppfolgingData from './under-oppfolging';

const mock = FetchMock.configure({
    enableFallback: false,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(300),
        MiddlewareUtils.loggingMiddleware()
    )
});

mock.post('/veilarbdialog/api/dialog', ({body}): any => opprettDialog(body)); // tslint:disable-line
mock.post('/veilarbvedtakinfo/api/behovsvurdering/svar', ({body}): any => sendSvar(body)); // tslint:disable-line
mock.get('/veilarbregistrering/api/registrering', registrering);
mock.get('/veilarboppfolging/api/underoppfolging', underOppfolgingData);

export default mock;
