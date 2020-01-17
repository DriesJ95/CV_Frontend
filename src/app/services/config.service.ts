import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { LOGGER } from './logger.service';
import {Config} from '@app/models/app-config.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {handleError} from '@app/shared/helpers';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  configUrl = 'assets/app-config.json';

  constructor(
    private http: HttpClient
  ) {
    this[`app`] = {};
  }

  async load(prefix: string, url: string) {
    try {
      this[prefix] = await this.http.get(url).toPromise();
    } catch (err) {
      LOGGER.error(`Cannot load configuration file [${url}]`);
    }
  }

  get(key: string, def: any = null): any {
    const value = key.split('.').reduce((o, i) => (o !== undefined && o != null) ? o[i] : null, this);
    return (value !== null && value !== undefined ? value : def);
  }

  getConfig() {
    return this.http.get<Config>(this.configUrl).pipe(catchError(handleError));
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }
}
