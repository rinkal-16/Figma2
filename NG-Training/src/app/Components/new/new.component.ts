import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  isExpanded = true;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();

  }

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }
  get groupsFormArray(): FormArray {
    // @ts-ignore
    return this.form.get('main').get('groups') as FormArray;
  }
  // tslint:disable-next-line:typedef
  _addGroup() {
    console.log('Add Group...');
    this.groupsFormArray.push(
      this.fb.control({
        id: this.groupsFormArray.length + 1,
        groups: []
      })
    );
  }
  // tslint:disable-next-line:typedef
  private createForm() {
    this.form = this.fb.group({
      id: 1,
      main: this.fb.group({
        groups: this.fb.array([])
      })
    });
  }

  ngOnInit(): void {
  }

}
