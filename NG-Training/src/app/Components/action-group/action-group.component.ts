import {
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, } from '@angular/forms';
import {Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {Globals} from '../globals';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


export interface GroupControlComponentData {
  conjunctor: null;
  groups: GroupControlComponentData[];
}

@Component({
  selector: 'app-action-group',
  templateUrl: './action-group.component.html',
  styleUrls: ['./action-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ActionGroupComponent),
      multi: true
    }
  ]
})
export class ActionGroupComponent implements ControlValueAccessor, OnDestroy, OnInit {

  constructor(private fb: FormBuilder, public globalId: Globals) {
    this.expandedIndex = -1;
  }

  get _groupsFormArray(): FormArray {
    // @ts-ignore
    return this.formChild.get('groups') as FormArray;
  }

  formChild!: FormGroup;
  expandedIndex: number | undefined;
  isExpanded = true;
  public isCollapsed = false;
  buttonTitle = 'Hide';
  visible = true;
  state = '';
  position = '';
  getId: any;
  connectedTo = [];

  @Input()
  formLabel: string | number = 'Group';
  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  expandRows: EventEmitter<void> = new EventEmitter<void>();
  @Input() data: any;
  // tslint:disable-next-line:no-output-rename
  @Output('parentId') parentId: any;
  @Output() public getUserData = new EventEmitter<string>();

  private onChange: ((
    value: GroupControlComponentData | null | undefined
  ) => void) | undefined;

  private destroy$: Subject<void> = new Subject<void>();

  // tslint:disable-next-line:adjacent-overload-signatures typedef
  doneList: any;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.createFormGroup();
    this._setupObservables();
    for (const week of this._groupsFormArray.controls) {
      // @ts-ignore
      this.connectedTo.push(week.id);
      // @ts-ignore
      console.log(this.connectedTo.push(week.id));
    }
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
  ngOnDestroy() {
    if (this.destroy$ && !this.destroy$.closed) {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }

  writeValue(value: GroupControlComponentData | null | undefined): void {
    if (!value) {
      return;
    }
    // @ts-ignore
    this.formChild.patchValue(value);
  }

  registerOnChange(fn: (value: GroupControlComponentData | null | undefined) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // TODO: implement this method
    // throw new Error('registerOnTouched not implemented');
  }

  setDisabledState(isDisabled: boolean): void {
    // TODO: implement this method
    // throw new Error('setDisabledState not implemented');
  }

  // tslint:disable-next-line:typedef
  deleteGroupFromArray(index: number) {
    this._groupsFormArray.removeAt(index);
  }

  // tslint:disable-next-line:typedef
  addGroup(id?: number | any) {
    this._groupsFormArray.push(
      this.fb.control({
        id: this._groupsFormArray.length + 1,
        groups: []
      })
    );

    this.getId = this._groupsFormArray.controls.map((i: any) => {
      console.log(i.value.id);
      return i.value.id;
    });
    console.log(this.getArrayDepth(this._groupsFormArray.controls));
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
  private createFormGroup() {
    this.formChild = this.fb.group({
      id: 1,
      groups: this.fb.array([])
    });
  }

  // tslint:disable-next-line:typedef
  private _setupObservables() {
    // @ts-ignore
    this.formChild.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      if (this.onChange) {
        this.onChange(value);
      }
    });
  }

  // tslint:disable-next-line:typedef
  drop(event: CdkDragDrop<string[]>) {
    // console.log('event: ', event);
    // console.log('drop last position', event.item._dragRef._pointerPositionAtLastDirectionChange);
    moveItemInArray(this._groupsFormArray.controls, event.previousIndex, event.currentIndex);
    // if (event.previousContainer !== event.container) {
    //   console.log('if called');
    //   transferArrayItem(event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex);
    // }
  }


}
