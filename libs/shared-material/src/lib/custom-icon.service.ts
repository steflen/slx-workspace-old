import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export enum Icons {
  Close = 'close',
  Delete = 'delete',
  DropSources = 'drop-sources',
  Edit = 'edit',
  Eye = 'eye',
  Help = 'help',
  Info = 'info',
  Key = 'key',
  Quicklaunch = 'quicklaunch',
  RemoteDesktop = 'remote-desktop',
  Videocam = 'videocam',
}

@Injectable({
  providedIn: 'root',
})
export class CustomIconService {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

  public registerIcons(): void {
    this.loadIcons(Object.values(Icons), '../assets/icons');
  }

  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach((key) => {
      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`),
      );
    });
  }
}