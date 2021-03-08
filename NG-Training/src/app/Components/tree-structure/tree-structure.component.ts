import {
  ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    Input,
  AfterViewInit,
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

// tslint:disable-next-line:class-name
interface list {
  id: 1;
  subItem: list[];
}

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tree-structure.component.scss']
})
export class TreeStructureComponent implements AfterViewInit, OnInit {

  constructor(private cdr: ChangeDetectorRef) {
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

  isExpanded = true;
  itemExist = false;
  myInput = 'I am Parent Component';
  // @ts-ignore
  Form: FormGroup;
  subvalue: any;
  resultArray: any;

  @Input() myArray: list[] = [];
  listId: any;
  interval: any;
  data: any;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }


  // @ts-ignore

  addItem(i?): void {
    console.log(i);
    // @ts-ignore
    // tslint:disable-next-line:no-bitwise
    const pqr = i === +i && i !== (i | 0);
    console.log(pqr);
    const xyz = this.myArray.includes(this.myArray[i - 1]);
    console.log(xyz);
    if (xyz !== false) {
      console.log('else called...');
      const index = this.myArray.findIndex(x => this.myArray[i + 1]);
      const rps = this.myArray.findIndex(x => x.id === i);
      this.itemExist = true;
      if (this.myArray[rps]) {
        console.log('nested called...');
        const abc = this.myArray[rps].subItem.length + 1;
        console.log('abc: ', abc);
        this.myArray[rps].subItem.push({subItem: [], id: i + '.' + abc} as unknown as list);
      }
      this.myArray.map((item: { subItem: any[]; }) => (
        item.subItem.map((subValue) => (
          this.subvalue = subValue
        ))
      ));
      console.log(this.subvalue);
      // tslint:disable-next-line:typedef prefer-for-of
      this.resultArray = Object.keys(this.subvalue).map((personNamedIndex) => {
        // @ts-ignore
        const person = this.subvalue[personNamedIndex];
        console.log(person);
        return person;
      });
      console.log(this.resultArray);
    } else {
      if (pqr === false) {
        console.log('if call...');
        this.myArray.push({
          subItem: [],
          id: this.myArray.length + 1
        } as list);
        console.log((this.myArray));
      } else {
        console.log('else called...');
        const index = this.myArray.findIndex(x => this.myArray[i + 1]);
        const rps = this.myArray.findIndex(x => x.id === i);
        // console.log('rps: ', rps);
        this.itemExist = true;
        if (this.myArray[rps]) {
          console.log('nested called...');
          const abc = this.myArray[rps].subItem.length + 1;
          console.log('abc: ', abc);
          console.log(this.myArray[rps].subItem.push({subItem: [], id: i + '.' + abc} as unknown as list));
          this.listId = this.myArray[rps].id;
        }
      }
    }
  }
  removeItem(i: number): void {
    console.log(i);
    this.myArray.splice(i, 1);
  }

  logValue(): void {
    console.log(this.myArray);
  }


}

