import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateComponent } from './state/state.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:'users', component: UserComponent },  
  { path:'states', component: StateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
