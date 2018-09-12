import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { GlobalData } from "./GlobalData";

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {
    constructor(public data:GlobalData) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 添加token认证
        const clonedRequest = req.clone({
          headers: req.headers.set('Token',this.data.token?this.data.token:"-1")
        });
        return next.handle(clonedRequest);
      }

}
