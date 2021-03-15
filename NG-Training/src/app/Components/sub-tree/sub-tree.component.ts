import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Globals} from '../globals';
import {CdkDragDrop, DragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sub-tree',
  templateUrl: './sub-tree.component.html',
  styleUrls: ['./sub-tree.component.scss'],
})
export class SubTreeComponent implements OnInit {

  constructor(private fb: FormBuilder, public globalId: Globals, private dragDrop: DragDrop) {
    this.globalId.dataID = 1;
    this.createForm();
    this.expandedIndex = -1;
  }
    get groupsFormArray(): FormArray {
      // @ts-ignore
      return this.form.get('main').get('groups') as FormArray;
    }

  // @ViewChild('formly', { read: ElementRef }) formlyForm!: ElementRef<HTMLElement>;
  // model: any = {};
  // options: FormlyFormOptions = {};
  // fields = this.groupsFormArray.controls;
  form!: FormGroup;
  form2!: FormGroup;
  isExpanded = true;
  expandedIndex: number;
  public isCollapsed = false;

  @Input() data2: any;
  // tslint:disable-next-line:no-output-rename
  @Output('parentId') parentId: any;
  // Nesting start
  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();
  // storeIndex!: any;
  // tslint:disable-next-line:no-output-rename
  @Output('storeIndex') storeIndex: any;
    // tslint:disable-next-line:typedef
    nextElementSibling: any;
    classList: any;
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
      // moveItemInArray(this.groupsFormArray.controls, event.previousIndex, event.currentIndex);
      if (event.previousContainer === event.container) {
        moveItemInArray(this.groupsFormArray.controls, event.previousIndex, event.currentIndex);
      }
      else {
        // @ts-ignore
        transferArrayItem(
          this.groupsFormArray.controls,
          event.previousIndex,
          event.currentIndex
        );
      }
    }

  // tslint:disable-next-line:typedef
  // drop(event: CdkDragDrop<any>) {
  //   this.groupsFormArray.controls[event.previousContainer.data.index] = {...event.container.data.item};
  //   this.groupsFormArray.controls[event.container.data.index] = {...event.previousContainer.data.item};
  //   event.currentIndex = 0;
  //   console.log(event.previousContainer.data, '-->', event.container.data);
  // }


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
      this.storeIndex = this.groupsFormArray.controls.indexOf(this.fb.control(this.groupsFormArray.controls.values));
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
    const coll = document.getElementsByClassName('collapsible');
  }

}
