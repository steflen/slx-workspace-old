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
        { path: '', component: MuxWebLayoutComponent },
        // { path: 'mux', component: MuxWebLayoutComponent },
        // {
        //   path: 'mux',
        //   loadChildren: () => import('@slx/mux-web-shell').then((module) => module.MuxWebShellModule),
        // },
        // { path: '**', redirectTo: 'mux' /*'404'*/, pathMatch: 'full' },
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
