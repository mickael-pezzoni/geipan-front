import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCasComponent } from './list-cas/list-cas.component';


const routes: Routes = [
  { path: '', redirectTo: 'list_cas', pathMatch: 'full'},
  { path: 'list_cas', component: ListCasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
