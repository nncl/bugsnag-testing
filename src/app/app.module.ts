import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';
import Bugsnag from '@bugsnag/js';
import { environment } from '../environments/environment';

Bugsnag.start({ apiKey: environment.bugsnagKey });

export function errorHandlerFactory(): any {
  return new BugsnagErrorHandler();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [{ provide: ErrorHandler, useFactory: errorHandlerFactory }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
