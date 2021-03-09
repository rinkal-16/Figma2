import {Component, EventEmitter, Input, OnInit, Output, VERSION} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sub-tree',
  templateUrl: './sub-tree.component.html',
  styleUrls: ['./sub-tree.component.scss']
})
export class SubTreeComponent implements OnInit{

  form!: FormGroup;
  isExpanded = true;

  // tslint:disable-next-line:no-output-rename
  @Output('parentId') parentId: any;
  @Input() dates: any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }


  // tslint:disable-next-line:typedef
  _addGroup() {
    this.groupsFormArray.push(
      this.fb.control({
        id: this.groupsFormArray.length + 1,
        groups: []
      })
    );
    for (let n = 0; n < this.groupsFormArray.length; n++) {
      this.parentId = this.groupsFormArray.value[n].id;
      console.log(this.parentId);
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
    console.log('parent: ', this.dates);
  }
}
