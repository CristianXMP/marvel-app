import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private countRequest: number = 0;

  constructor(private loadingService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!this.countRequest)this.loadingService.show();

    this.countRequest++;

    return next.handle(request).pipe(finalize(()=> {
      this.countRequest--;
      if (!this.countRequest) this.loadingService.hide();
    }));

  }
}
