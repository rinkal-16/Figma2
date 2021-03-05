import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveTaskComponent } from './Components/directive-task/directive-task.component';
import { NumDirectiveDirective } from './Components/Directives/num-directive.directive';
import { FigmaUIComponent } from './Components/figma-ui/figma-ui.component';
import { TreeStructureComponent } from './Components/tree-structure/tree-structure.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SubTreeComponent } from './Components/sub-tree/sub-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveTaskComponent,
    NumDirectiveDirective,
    FigmaUIComponent,
    TreeStructureComponent,
    SubTreeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
