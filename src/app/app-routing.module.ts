import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: '', redirectTo: 'updates2k23', pathMatch: 'full' },
  { path: 'updates2k23', component: MasterComponent },
  { path: 'updates2k23/rules/:id', component: RulesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
