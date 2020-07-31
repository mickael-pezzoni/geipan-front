import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { DetailCasComponent } from './detail-cas/detail-cas.component';
import { ListingComponent } from './listing/listing.component';


const routes: Routes = [
  { path: '', redirectTo: 'list_cas', pathMatch: 'full'},
  { path: 'list_cas', component: ListingComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'cas-detail/:idCas', component: DetailCasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
