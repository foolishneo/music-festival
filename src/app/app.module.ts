import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FestivalsComponent } from './controllers/festivals/festivals.component';
import { environment } from '../environments/environment';
import { HttpErrorInterceptor } from './interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FestivalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ 
    { provide: 'ENVIRONMENT', useValue: environment },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
