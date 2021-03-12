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
  isExpanded = true;

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
    console.log('---', this._groupsFormArray.controls);
  }

  expandRow(index: number): void {
    this.expandedIndex = index === this.expandedIndex ? -1 : index;
    console.log('++', this.expandedIndex);
    if (this.expandedIndex === -1) {
      this.isExpanded = false;
    } else {
      this.isExpanded = true;
    }
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
    console.log('+++', this._groupsFormArray.controls, this._groupsFormArray.length);
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
