import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@slx/core';
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
    RouterModule.forRoot(
      [
        // { path: '', redirectTo: 'web', pathMatch: 'full' },
        {
          path: '',
          loadChildren: () => import('@slx/platform-shell-mobile').then((module) => module.PlatformShellMobileModule),
        },
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
