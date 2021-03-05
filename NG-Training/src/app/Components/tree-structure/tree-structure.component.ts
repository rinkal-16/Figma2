import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html', changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tree-structure.component.scss']
})
export class TreeStructureComponent implements OnInit {

  isExpanded = true;

  public list: any[] = [{
    id: 1,
    subItem: []
  }];
  itemExist = false;
  myInput = 'I am Parent Component';
  // @ts-ignore
  Form: FormGroup;
  // tslint:disable-next-line:no-input-rename
  // @Input('list') lists!: number;

  constructor(private cd: ChangeDetectorRef) {
    // this.Form = this.fb.group({
    //   array: this.fb.array([this.fb.group({
    //     id: [],
    //     subItem: [{
    //       array: this.fb.array([this.fb.group({
    //         id: [],
    //         subItem: []
    //       })])
    //     }]
    //   })])
    // });
  }


  // tslint:disable-next-line:typedef
  // get spec() {
  //   return this.Form.get('array') as FormArray;
  // }
  // // tslint:disable-next-line:typedef
  // // @ts-ignore
  // // tslint:disable-next-line:typedef
  // get spec1(i?) {
  //   return this.Form.controls[i].value.array.get('array2') as FormArray;
  // }

  ngOnInit(): void {
  }

  getChildData(data: any): void {
    console.log(data);
  }

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }

  // const index = this.list.indexOf(this.list[i]);
  // console.log('value: ', i, 'index: ', index);

  // @ts-ignore
  addItem(i?): void {
    // @ts-ignore
    const xyz = this.list.includes(this.list[i - 1]);
    console.log(xyz);
    if (xyz === false) {
      console.log('if call...');
      this.list.push({
        id: this.list.length + 1,
      });
    }
    else {
      console.log('innerArray: ', this.list[i - 1].subItem);
      // @ts-ignore
      if (this.list[i - 1].subItem === undefined) {
        this.list[i - 1].subItem = [];
        console.log(this.list[i - 1].subItem);
      }
      console.log(this.list[i - 1].subItem);
      const abc = this.list[i - 1].subItem.length + 1;
      console.log('abc: ', abc);
      // @ts-ignore
      this.list[i - 1].subItem.push({id: i + '.' + abc});
      this.itemExist = true;
    }
  }

  // addSubItem(i: number): void {
  //     // @ts-ignore
  //   const abc = this.list[0].subItem.length + 1;
  //   console.log(abc);
  //   this.list[0].subItem.push({id: i + '.' + abc});
  // }

  removeItem(i: number): void {
    this.list.splice(i, 1);
  }

  logValue(): void {
    console.log(this.list);
  }


}
