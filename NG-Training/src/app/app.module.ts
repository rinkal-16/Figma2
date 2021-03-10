import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveTaskComponent } from './Components/directive-task/directive-task.component';
import { NumDirectiveDirective } from './Components/Directives/num-directive.directive';
import { FigmaUIComponent } from './Components/figma-ui/figma-ui.component';
import { TreeStructureComponent } from './Components/tree-structure/tree-structure.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SubTreeComponent } from './Components/sub-tree/sub-tree.component';
import { TreeNodeComponent } from './Components/tree-node/tree-node.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Tree3Component } from './Components/tree3/tree3.component';
import { ActionButtonComponent } from './Components/action-button/action-button.component';
import { ActionGroupComponent } from './Components/action-group/action-group.component';
import { Globals } from './Components/globals';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveTaskComponent,
    NumDirectiveDirective,
    FigmaUIComponent,
    TreeStructureComponent,
    SubTreeComponent,
    TreeNodeComponent,
    Tree3Component,
    ActionButtonComponent,
    ActionGroupComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        BrowserAnimationsModule,

    ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
