import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@slx/core';
import { MuxWebLayoutComponent, MuxWebShellModule } from '@slx/mux-web-shell';
import { SharedTranslationModule } from '@slx/shared-translation';
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
        { path: '', redirectTo: 'mux', pathMatch: 'full' },
        { path: 'mux', component: MuxWebLayoutComponent },
        // { path: 'mux', component: MuxWebLayoutComponent },
        // {
        //   path: 'mux',
        //   loadChildren: () => import('@slx/mux-web-shell').then((module) => module.MuxWebShellModule),
        // },
      ],
      {
        //router configs
      },
    ),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
