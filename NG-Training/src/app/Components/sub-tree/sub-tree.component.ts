import {Component, EventEmitter, Input, OnInit, Output, VERSION} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Globals } from '../globals';

@Component({
  selector: 'app-sub-tree',
  templateUrl: './sub-tree.component.html',
  styleUrls: ['./sub-tree.component.scss']
})
export class SubTreeComponent implements OnInit{

  form!: FormGroup;
  isExpanded = true;
  expandedIndex: number;
  @Input() data2: any;
  // tslint:disable-next-line:no-output-rename
  @Output('parentId') parentId: any;
  constructor(private fb: FormBuilder, public globalId: Globals) {
    this.globalId.dataID = 1;
    this.createForm();
    this.expandedIndex = -1;
  }


  expandRow(index: number): void {
    this.expandedIndex = index === this.expandedIndex ? -1 : index;
  }

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }


  // tslint:disable-next-line:typedef
  _addGroup() {
    // console.log('Add Group...', this.groupsFormArray.controls[n].value.id);
    this.groupsFormArray.push(
      this.fb.control({
        id: this.groupsFormArray.length + 1,
        groups: []
      })
    );
    for (let n = 0; n < this.groupsFormArray.length; n++) {
      this.globalId.dataID = this.groupsFormArray.value[n].id;
    }
  }
  

  // tslint:disable-next-line:typedef
  delete(index: number) {
    this.groupsFormArray.removeAt(index);
  }

  get groupsFormArray(): FormArray {
    // @ts-ignore
    return this.form.get('main').get('groups') as FormArray;
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
    this.globalId.dataID = 1;
    console.log('parent global: ', this.globalId.dataID);
  }
}
