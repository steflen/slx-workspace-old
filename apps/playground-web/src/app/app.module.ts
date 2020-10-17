import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@slx/core';
import { MuxWebShellModule } from '@slx/mux-web-shell';
import { SharedTranslationModule } from '@slx/shared-translation';
import { MuxWebLayoutComponent } from '../../../../libs/mux/web/shell/src/lib/components/layout/mux-web-layout.component';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule.forRoot(environment),
    SharedTranslationModule.forRoot(environment),
    MuxWebShellModule,
    RouterModule.forRoot(
      [
        // { path: '', redirectTo: 'web', pathMatch: 'full' },
        { path: '', component: MuxWebLayoutComponent },
        // {
        //   path: '',
        //   loadChildren: () => import('@slx/mux-web-shell').then((module) => module.MuxWebShellModule),
        // },
      ],
      {
        //router config
      },
    ),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
