import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardModule } from '@slx/board';
import { CoreModule } from '@slx/core';
import { SettingsModule } from '@slx/settings';
import { SharedModule } from '@slx/shared';
import { TranslationModule } from '@slx/translation';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    TranslationModule.forRoot(environment),
    CoreModule.forRoot(environment),
    SettingsModule.forRoot(environment),
    BoardModule, // board-routing is done via @slx/shell
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
