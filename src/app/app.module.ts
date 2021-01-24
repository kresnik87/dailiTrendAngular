import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { TrendCardComponent } from './component/trend-card/trend-card.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {environment} from 'src/environments/environment';
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ApiConfiguration} from "../swagger/api-configuration";
import {AngularAuthModule, Interceptor, LibConfiguration} from "@kresnik87/angular-auth";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {ApiModule} from "../swagger/api.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";

export function HttpLoaderFactory(httpClient: HttpClient)
{
  return new TranslateHttpLoader(httpClient, './assets/lang/', '.json');
}

export function initApiConfiguration(config: ApiConfiguration): Function
{
  return () =>
  {
    config.rootUrl = environment.apiUrl;
    config.client_id = environment.clientId;
    config.client_secret = environment.clientSecret;
    config.grant_type = environment.grant_type;
  };
}

export const INIT_API_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApiConfiguration,
  deps: [ApiConfiguration],
  multi: true
};

export const config: LibConfiguration = {
  rootUrl: environment.apiUrl,
  client_secret: environment.clientSecret,
  grant_type: environment.grant_type,
  client_id: environment.clientId,
  default_routes: false
};

function initLibConfiguration(lib: LibConfiguration)
{
  return () =>
  {
    lib.rootUrl = environment.apiUrl;
    lib.grant_type = environment.grant_type;
    lib.client_id = environment.clientId;
    lib.client_secret = environment.clientSecret;
    lib.default_routes = false;
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    ApiModule.forRoot({
      rootUrl: environment.apiUrl,
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      grant_type: environment.grant_type
    }),
    AngularAuthModule.forRoot(config),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [
    INIT_API_CONFIGURATION,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
