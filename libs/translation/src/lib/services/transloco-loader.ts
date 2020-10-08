import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(langPath: string) {
    console.log('GET TRANSLATION ' + langPath);
    return this.http.get<Translation>(`./assets/i18n/${langPath}.json`);
  }
}
