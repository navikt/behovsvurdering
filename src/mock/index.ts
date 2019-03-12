import FetchMock, { Middleware, MiddlewareUtils } from 'yet-another-fetch-mock';
import SisteArbeidsforhold from './registrering';
import OppfolgingStatus from './oppfolging';
import BoligInformajson from './boliginformasjon';
import DataFraMia from './dataFraMia';
import { opprettDialog } from './dialog';

const loggingMiddleware: Middleware = (request, response) => {
    // tslint:disable
    console.groupCollapsed(request.url);
    console.groupCollapsed('config');
    console.log('url', request.url);
    console.log('queryParams', request.queryParams);
    console.log('pathParams', request.pathParams);
    console.log('body', request.body);
    console.groupEnd();

    try {
        console.log('response', JSON.parse(response.body));
    } catch (e) {
        console.log('response', response);
    }

    console.groupEnd();
    // tslint:enable
    return response;
};

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(0),
        loggingMiddleware
    )
});

mock.get('/veilarbregistrering/api/registrering', SisteArbeidsforhold );
mock.get('/veilarboppfolging/api/oppfolging', OppfolgingStatus );
mock.get('/veilarbperson/api/person/geografisktilknytning', BoligInformajson );
mock.get('https://mia.nav.no/rest/behovsvurdering/stillingerifylke', DataFraMia );
mock.post('/veilarbdialog/api/dialog', ({ body }): any => opprettDialog(body)); // tslint:disable-line

export default mock;