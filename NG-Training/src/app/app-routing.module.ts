import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SubTreeComponent } from './Components/sub-tree/sub-tree.component';

const routes: Routes = [
  { path: 'subtree', component: SubTreeComponent},
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
