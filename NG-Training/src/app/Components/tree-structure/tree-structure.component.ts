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

  addItem(id?: number | undefined): void {
    console.log(id);
    // @ts-ignore
    // tslint:disable-next-line:no-bitwise
    const pqr = id === +id && id !== (id | 0);
    console.log(pqr);
    // @ts-ignore
    const xyz = this.myArray.includes(this.myArray[id - 1]);
    console.log(xyz);
    if (xyz !== false) {
      console.log('else called...');
      // @ts-ignore
      const index = this.myArray.findIndex(x => this.myArray[id + 1]);
      const rps = this.myArray.findIndex(x => x.id === id);
      this.itemExist = true;
      if (this.myArray[rps]) {
        console.log('nested called...');
        const abc = this.myArray[rps].subItem.length + 1;
        console.log('abc: ', abc);
        this.myArray[rps].subItem.push({subItem: [], id: id + '.' + abc} as unknown as list);
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
        // @ts-ignore
        this.myArray.push({
          subItem: [],
          id: this.myArray.length + 1,
        } as list);
        console.log((this.myArray));
      } else {
        console.log('else called...');
        // @ts-ignore
        const index = this.myArray.findIndex(x => this.myArray[id + 1]);
        const rps = this.myArray.findIndex(x => x.id === id);
        // console.log('rps: ', rps);
        this.itemExist = true;
        if (this.myArray[rps]) {
          console.log('nested called...');
          const abc = this.myArray[rps].subItem.length + 1;
          console.log('abc: ', abc);
          console.log(this.myArray[rps].subItem.push({subItem: [], id: id + '.' + abc} as unknown as list));
          this.listId = this.myArray[rps].id;
        }
      }
    }
  }
  removeItem(id: number): void {
    console.log('id: ', id, id - 1);
    this.myArray.splice(id - 1, 1);
    console.log(this.myArray);
  }

  logValue(): void {
    console.log(this.myArray);
  }


}

