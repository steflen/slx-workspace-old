import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardFeatureShellModule } from '@slx/board-feature-shell';
import { CoreModule } from '@slx/core';
import { SettingsDomainModule } from '@slx/settings-domain';
import { SettingsFeatureShellModule } from '@slx/settings-feature-shell';
import { SharedTranslationModule } from '@slx/shared-translation';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedTranslationModule.forRoot(environment),
    CoreModule.forRoot(environment),

    BoardFeatureShellModule, // board-routing is done via @slx/shell-old-old
    SettingsDomainModule.forRoot(environment),
    SettingsFeatureShellModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
