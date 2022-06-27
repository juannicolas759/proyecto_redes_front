import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormParamsComponent } from './components/form-params/form-params.component';
import { TableResultsComponent } from './components/table-results/table-results.component';
import { FormServiceService } from './services/form-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FormParamsComponent,
    TableResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [FormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
