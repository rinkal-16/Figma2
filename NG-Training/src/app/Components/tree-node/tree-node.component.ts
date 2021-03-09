import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: [ './tree-node.component.scss' ]
})
export class TreeNodeComponent implements OnInit {
  name = 'Angular';
  public userForm: FormGroup;
  arrayItems: {
    id: number;
    title: string;
  }[] | undefined;

  ngOnInit(): void {
    this.arrayItems = [];
  }

  // tslint:disable-next-line:variable-name
  constructor(private _fb: FormBuilder) {
    this.userForm = this._fb.group({
      address: this._fb.array([this.addAddressGroup()]),
      // subaddress: this._fb.array([])
    });
  }

  private addAddressGroup(): FormGroup {
    return this._fb.group({
      contacts: this._fb.array([])
    });
  }

  private contactsGroup(): FormGroup {
    return this._fb.group({
      contactPerson: this._fb.array([])
    });
  }
  // get demoArray() {
  //   return this.demoForm.get('demoArray') as FormArray;
  // }
  // addItem(item) {
  //   this.arrayItems.push(item);
  //   this.demoArray.push(this._formBuilder.control(false));
  // }
  // removeItem() {
  //   this.arrayItems.pop();
  //   this.demoArray.removeAt(this.demoArray.length - 1);
  // }
  get addressArray(): FormArray {
    return this.userForm.get('address') as FormArray;
  }

  get contactArray(): FormArray {
    return this.userForm.get('contacts') as FormArray;
  }

  addAddress(): void {
    this.addressArray.push(this.addAddressGroup());
  }

  removeAddress(index: number): void {
    console.log(index);
    // @ts-ignore
    this.arrayItems?.pop();
    this.addressArray.removeAt(index);
  }

  addContact(index: string | number): void {
    // @ts-ignore
    ((this.addressArray.controls[index] as FormGroup).controls.contacts as FormArray).push(this.contactsGroup());
  }

  removeContact(index: number): void {
    console.log(index);
    this.contactArray.removeAt(index);
  }

}
