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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';
import { AllInONeCompComponent } from './Components/all-in-one-comp/all-in-one-comp.component';
import { IntegralUIModule } from '../../node_modules/@lidorsystems/integralui-web/bin/integralui/integralui.module';
import { NewComponent } from './Components/new/new.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';


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
    AllInONeCompComponent,
    NewComponent,
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
    NgbModule,
    MatExpansionModule,
    IntegralUIModule,
    DragDropModule,
    FormlyMaterialModule,
    FormlyModule.forRoot(),
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
