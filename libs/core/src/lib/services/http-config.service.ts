import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpConfigService {
  private config: any;
  public configSubject$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  public loadConfig() {
    return this.http
      .get('./assets/config.json')
      .toPromise()
      .then((config: any) => {
        this.config = config;
        this.configSubject$.next(this.config);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  public getConfig() {
    return this.config;
  }
}

export function initHttpConfig(httpConfig: HttpConfigService) {
  return () => httpConfig.loadConfig();
}
