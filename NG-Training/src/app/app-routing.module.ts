import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveTaskComponent } from './Components/directive-task/directive-task.component';
import { AppComponent } from './app.component';
import { FigmaUIComponent } from './Components/figma-ui/figma-ui.component';
import { TreeStructureComponent } from './Components/tree-structure/tree-structure.component';

const routes: Routes = [
  { path: 'directive', component: DirectiveTaskComponent },
  { path: 'figma', component: FigmaUIComponent },
  { path: 'tree', component: TreeStructureComponent},
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
