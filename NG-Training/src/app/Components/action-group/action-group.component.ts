import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Globals } from '../globals';

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
export class ActionGroupComponent
  implements ControlValueAccessor, OnDestroy, OnInit {
  @Input()
  formLabel: string | number = 'Group';

  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();

  @Input() data: any;
  // tslint:disable-next-line:no-output-rename
  @Output('parentId') parentId: any;
  @Output() public getUserData = new EventEmitter<string>();

  form!: FormGroup;
  expandedIndex: number;


  private onChange: ((
    value: GroupControlComponentData | null | undefined
  ) => void) | undefined;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder, public globalId: Globals) {
    this.expandedIndex = -1;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.createFormGroup();
    this._setupObservables();
    console.log('child global---', this.globalId.dataID);

    const arr: any[] = [];
    const abc = this.globalId;
    // tslint:disable-next-line:only-arrow-functions typedef
    Object.keys(abc).map(function(key){
      // @ts-ignore
      arr.push({[key]: abc[key]});
      return arr;
    });
    console.log('Array=sss',  this.globalId.dataID);

  }


  expandRow(index: number): void {
    this.expandedIndex = index === this.expandedIndex ? -1 : index;
  }

  // tslint:disable-next-line:typedef

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
    this.form.patchValue(value);
  }

  registerOnChange(
    fn: (value: GroupControlComponentData | null | undefined) => void
  ): void {
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
  deleteCondition(index: number) {
    this._conditionsFormArray.removeAt(index);
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
    // console.log('data: ', this.data);
    // for (let n = 0; n < this._groupsFormArray.length; n++) {
    //
    //   //this.globalId.dataID = this.data + '.' + this._groupsFormArray.value[n].id;
    //
    // }
    // console.log('action-group: ', this.globalId.dataID);
  }

  get _conditionsFormArray(): FormArray {
    // @ts-ignore
    return this.form.get('conditions') as FormArray;
  }

  get _groupsFormArray(): FormArray {
    // @ts-ignore
    return this.form.get('groups') as FormArray;
  }

  // tslint:disable-next-line:typedef
  private createFormGroup() {
    this.form = this.fb.group({
      id: 1,
      groups: this.fb.array([])
    });
  }

  // tslint:disable-next-line:typedef
  private _setupObservables() {
    // @ts-ignore
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      if (this.onChange) {
        this.onChange(value);
      }
    });
  }
}
