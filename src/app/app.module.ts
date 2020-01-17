// Angular Modules
import { NgModule } from '@angular/core';

// App Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDatepickerModule, DatePickerComponent, DatepickerModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {ToastrModule} from 'ngx-toastr';


const MODULES: any[] = [
  CoreModule,
  SharedModule,
  FeaturesModule,
  LayoutsModule,
  AppRoutingModule,
  BsDatepickerModule.forRoot(),
  BrowserModule,
  HttpClientModule,
  ToastrModule.forRoot()
];


const DECLARATIONS: any[] = [
  AppComponent
];


@NgModule({
  imports: MODULES,
  declarations: DECLARATIONS,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
