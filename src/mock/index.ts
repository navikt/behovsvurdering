import FetchMock, { Middleware, MiddlewareUtils, } from 'yet-another-fetch-mock';
import { opprettDialog } from './dialog';
import { sendSvar } from './behovsvurdering';

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
    enableFallback: false,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(1000),
        loggingMiddleware
    )
});

// Mock med status 500
// mock.post('/veilarbdialog/api/dialog', ResponseUtils.statusCode(500));
mock.post('/veilarbdialog/api/dialog', ({body}): any => opprettDialog(body)); // tslint:disable-line
mock.post('/veilarbvedtakinfo/api/behovsvurdering/svar', ({body}): any => sendSvar(body)); // tslint:disable-line

export default mock;