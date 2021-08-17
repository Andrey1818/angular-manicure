import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainPageComponent} from './shared/components/main-page/main-page.component';
import {PriceComponent} from './price/price.component';
import {MatModule} from "./shared/mat.module";
import {MainInfoModule} from "./main-information/shared/main-info.module";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ManicureAppointmentComponent } from './manicure-appointment/manicure-appointment.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PriceComponent,
    ManicureAppointmentComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatModule,
    MainInfoModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
