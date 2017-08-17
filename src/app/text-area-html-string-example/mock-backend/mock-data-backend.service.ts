import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { USER_LIST, SHOP_LIST } from './data/backend-data';

export function FakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {

    const data: any = {
        'user': USER_LIST,
        'shop': SHOP_LIST
    };

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {
            console.log('connection subscribe => ', connection.request.url);
            if (connection.request.url.indexOf('/api/user') > -1 && connection.request.method === RequestMethod.Get) {
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200, body: data['user'] })
                ));
            } else if (connection.request.url.indexOf('/api/shop') > -1 && connection.request.method === RequestMethod.Get) {
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200, body: data['shop'] })
                ));
            }
        }, 500);
    });
    return new Http(backend, options);
}

export let FakeBackendProvider = {
    provide: Http,
    useFactory: FakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};
