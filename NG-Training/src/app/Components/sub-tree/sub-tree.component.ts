import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Globals} from '../globals';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-sub-tree',
  templateUrl: './sub-tree.component.html',
  styleUrls: ['./sub-tree.component.scss'],
})

export class SubTreeComponent implements OnInit {
  groups: any;
  id: any;

    constructor(private fb: FormBuilder, public globalId: Globals) {
      this.globalId.dataID = 1;
      this.createForm();
      this.expandedIndex = -1;
      // @ts-ignore
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
    @Output()
    remove: EventEmitter<void> = new EventEmitter<void>();
    // tslint:disable-next-line:no-output-rename
    @Output('storeIndex') storeIndex: any;
    // tslint:disable-next-line:typedef
    classList: any;
    // tslint:disable-next-line:typedef
    isOpen2: any;
    totalData: any;
    getId: any;
    connectedTo = [];

    ngOnInit(): void {
      this.globalId.dataID = 1;
      for (const week of this.groupsFormArray.controls) {
        // @ts-ignore
        this.connectedTo.push(week.id);
        // @ts-ignore
        console.log('ngOnInit: ', this.connectedTo.push(week.id));
      }
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

    expand(): void {
      this.isExpanded = !this.isExpanded;
    }
    // tslint:disable-next-line:typedef
    showhide() {
        this.visible = this.visible ? false : true;
        this.buttonTitle = this.visible ? 'Show' : 'Hide';
    }
    // tslint:disable-next-line:typedef
    _addGroup() {
      if (this.formParent.value.id === '') {
        this.groupsFormArray.push(
          this.fb.control({
            id: this.groupsFormArray.length + 1,
            groups: []
          })
        );
      }
      else {
        this.groupsFormArray.controls.map((item) => {
          this.groupsFormArray.push(
              this.fb.control({
                id: this.groupsFormArray.length + 1,
                groups: []
              })
            );
        });
      }
      this.getId = this.groupsFormArray.controls.map((i: any) => {
      
        return i.value.id;
      });

      this.totalData = this.formParent.value;
      // tslint:disable-next-line:prefer-for-of
      for (let k = 0; k < this.formParent.value.length; k++) {
      
      }

    }
  // tslint:disable-next-line:typedef
  getArrayDepth(ry: any) {
    // number of levels: how deep is the array
    let levels = 1;
    // previous length
    // tslint:disable-next-line:variable-name
    let prev_length = 1;
    // current length
    // tslint:disable-next-line:variable-name
    let curr_length = ry.length;
    // if the resulting array is longer than the previous one  add a new level
    while (curr_length > prev_length){
      ry = ry.flat();
      prev_length = curr_length;
      curr_length = ry.length;
      levels ++;
    }
    return levels;
  }



    // tslint:disable-next-line:typedef
    delete(index: number) {
      this.groupsFormArray.removeAt(index);
    }
    // tslint:disable-next-line:typedef
    private createForm() {
      this.formParent = this.fb.group({
        id: '',
        main: this.fb.group({
          groups: this.fb.array([])
        })
      });
    }
    // tslint:disable-next-line:typedef
    drop(event: CdkDragDrop<string[]>) {
    
      // console.log('event: ', event);
      // console.log('distance: ', event.distance);
      // console.log('drop last position', event.item._dragRef._pointerPositionAtLastDirectionChange);
      moveItemInArray(this.groupsFormArray.controls, event.previousIndex, event.currentIndex);
      // // console.log('main', event.previousContainer, event.container);
      // if (event.previousContainer === event.container) {
      //   alert('if');
      //   moveItemInArray(this.groupsFormArray.controls, event.previousIndex, event.currentIndex);
      // } else {
      //    alert('else');
      //    console.log(event.previousContainer.data, this.groupsFormArray.controls, event.previousIndex, event.currentIndex);
      //     transferArrayItem(event.previousContainer.data,
      //     event.container.data,
      //     event.previousIndex,
      //     event.currentIndex);
      // }
    
    }

   dropped(event: CdkDragDrop<string[]>) {
  
     console.log('called....', event, event.previousIndex, event.currentIndex);
     if (event.previousContainer === event.container) {
      alert('if');
      moveItemInArray(this.groupsFormArray.controls, event.previousIndex, event.currentIndex);
    } else {
       alert('else');
       console.log(event.previousContainer.data, this.groupsFormArray.controls, event.previousIndex, event.currentIndex);
        transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
   }
  

}
