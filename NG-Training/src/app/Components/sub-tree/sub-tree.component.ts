import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Globals } from '../globals';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-sub-tree',
  templateUrl: './sub-tree.component.html',
  styleUrls: ['./sub-tree.component.scss'],
})
export class SubTreeComponent implements OnInit {

  form!: FormGroup;
  form2!: FormGroup;
  isExpanded = true;
  expandedIndex: number;
  @Input() data2: any;
  // tslint:disable-next-line:no-output-rename
  @Output('parentId') parentId: any;

  // Nesting start
  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  constructor(private fb: FormBuilder, public globalId: Globals) {
    this.globalId.dataID = 1;
    this.createForm();
    this.expandedIndex = -1;
  }
  // tslint:disable-next-line:use-lifecycle-interface
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');

    }
    writeValue(obj: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnChange(fn: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn: any): void {
        throw new Error('Method not implemented.');
    }

  // tslint:disable-next-line:typedef
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }



    expandRow(index: number): void {
      console.log('sub-tree expandRow: ', index);
      this.expandedIndex = index === this.expandedIndex ? -1 : index;
    }
    expand(): void {
      this.isExpanded = !this.isExpanded;
    }
    // tslint:disable-next-line:typedef
    _addGroup() {
      // console.log('---', this.groupsFormArray.controls, this.groupsFormArray.length);
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
  addNew() {
    console.log('+ called');
  }
    // tslint:disable-next-line:typedef
    delete(index: number) {
      console.log('delete: ', index);
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
    console.log('+++', this.groupsFormArray?.controls);
  }

}
