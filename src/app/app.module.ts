import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormParamsComponent } from './components/form-params/form-params.component';
import { TableResultsComponent } from './components/table-results/table-results.component';

@NgModule({
  declarations: [
    AppComponent,
    FormParamsComponent,
    TableResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
