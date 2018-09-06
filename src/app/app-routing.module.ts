import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ArbreComponent }  from './arbre/arbre.component';

const routes: Routes = [
  {path:'users' , component: UsersComponent},
  {path:'arbre', component: ArbreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
