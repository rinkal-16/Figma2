import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Globals} from '../globals';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sub-tree',
  templateUrl: './sub-tree.component.html',
  styleUrls: ['./sub-tree.component.scss'],
})

export class SubTreeComponent implements OnInit {

    constructor(private fb: FormBuilder, public globalId: Globals) {
      this.globalId.dataID = 1;
      this.createForm();
      this.expandedIndex = -1;
    }
    get groupsFormArray(): FormArray {
      // @ts-ignore
      return this.formParent.get('main').get('groups') as FormArray;
    }

    formParent!: FormGroup;
    isExpanded = true;
    expandedIndex: number;
    public isCollapsed = false;
    buttonTitle = 'Hide';
    visible = true;
    @Input() title = 'True';
    
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
    classList: any;
    // tslint:disable-next-line:typedef
    isOpen2: any;
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
      console.log('event: ', event.previousIndex, event.currentIndex);
      moveItemInArray(this.groupsFormArray.controls, event.previousIndex, event.currentIndex);
    }
    expand(): void {
      this.isExpanded = !this.isExpanded;
    }
    // tslint:disable-next-line:typedef
    showhideutility() {
        this.visible = this.visible ? false : true;
        this.buttonTitle = this.visible ? 'Show' : 'Hide';
    }
    // tslint:disable-next-line:typedef
    _addGroup() {
      this.groupsFormArray.push(
        this.fb.control({
          id: this.groupsFormArray.length + 1,
          groups: []
        })
      );
      this.storeIndex = this.groupsFormArray.controls.indexOf(this.fb.control(this.groupsFormArray.controls.values));
    }
    // tslint:disable-next-line:typedef
    delete(index: number) {
      console.log('delete: ', index);
      this.groupsFormArray.removeAt(index);
    }
    // tslint:disable-next-line:typedef
    private createForm() {
      this.formParent = this.fb.group({
        id: 1,
        main: this.fb.group({
          groups: this.fb.array([])
        })
      });
    }

  ngOnInit(): void {
    this.globalId.dataID = 1;
  }

}
