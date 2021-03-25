import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubTreeComponent } from './Components/sub-tree/sub-tree.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionButtonComponent } from './Components/action-button/action-button.component';
import { ActionGroupComponent } from './Components/action-group/action-group.component';
import { Globals } from './Components/globals';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IntegralUIModule } from '../../node_modules/@lidorsystems/integralui-web/bin/integralui/integralui.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [
    AppComponent,
    SubTreeComponent,
    ActionButtonComponent,
    ActionGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    IntegralUIModule,
    DragDropModule,
    FormlyModule.forRoot(),
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
