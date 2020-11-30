import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Outoing request')
        console.log(req.headers)
        console.log(req)
        return next.handle(req).pipe(tap(event => {
            if(event.type === HttpEventType.Response) {
                console.log("Incoming response")
                console.log(event.body)
            }
        }));
    }
}