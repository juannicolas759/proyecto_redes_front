import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormParamsComponent } from './components/form-params/form-params.component';
import { TableResultsComponent } from './components/table-results/table-results.component';

const routes: Routes = [{path:'', redirectTo:'form-params',pathMatch:'full'},
{ path:'form-params', component : FormParamsComponent  },{ path:'table-results', component : TableResultsComponent  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
