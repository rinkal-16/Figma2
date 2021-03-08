import {Component, ElementRef, OnInit, Output, ViewChild, Input, EventEmitter, SimpleChanges} from '@angular/core';
// tslint:disable-next-line:class-name
interface list {
  id: 1;
  subItem: list[];
}
@Component({
  selector: 'app-sub-tree',
  templateUrl: './sub-tree.component.html',
  styleUrls: ['./sub-tree.component.scss']
})

export class SubTreeComponent implements OnInit {
  @Input() parentData: any;
  @Input() myArray: list[] = [];
  @Input() i: any;

  constructor() { }
  isExpanded = true;
  listId: any;
  itemExist = false;
  // @ts-ignore

  ngOnInit(): void {
    console.log(this.i);
  }
  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
  }

  // tslint:disable-next-line:typedef
  sendValue(i?: string | number): void {
    // this.data += 1;
    console.log(i);
    // @ts-ignore
    // tslint:disable-next-line:no-bitwise
    const pqr = i === +i && i !== (i | 0);
    console.log(pqr);
    // @ts-ignore
    const xyz = this.myArray.includes(this.myArray[i - 1]);
    console.log(xyz);
    if (xyz === false && pqr === false) {
      console.log('if call...');
      this.myArray.push({
        subItem: [],
        id: this.myArray.length + 1
      } as list);
      console.log((this.myArray));
    }
    else {
      console.log('else called...');
      console.log('check float cond: ', pqr, this.myArray);
      // @ts-ignore
      console.log(typeof this.myArray);
      // @ts-ignore
      const index = this.myArray.findIndex(x => this.myArray[i + 1]);
      console.log('index: ', index);
      // tslint:disable-next-line:prefer-for-of
      // for (let k = 0; k < this.myArray.length; k++) {
      const rps = this.myArray.findIndex(x => x.id === i);
      console.log('rps: ', rps);
      if (this.myArray[rps]) {
        console.log('nested called...');
        const abc = this.myArray[rps].subItem.length + 1;
        console.log('abc: ', abc);
        console.log(this.myArray[rps].subItem.push({subItem: [], id: i + '.' + abc} as unknown as list));
        console.log(this.myArray);
        this.listId = this.myArray[rps].id;
        this.itemExist = true;
      }
      // @ts-ignore
      if (this.myArray[i] === undefined) {
        // console.log(this.myArray.push({subItem: [], id: 1.1} as unknown as list));
      }
      // console.log(this.myArray.length);
      // const abc = this.myArray[i].subItem.length + 1;
      // console.log('abc: ', abc, this.myArray);
      // // console.log(this.list[i - 1].subItem.push({id: i + '.' + abc}));
      // // @ts-ignore
      // this.myArray[i].subItem.push({id: i + '.' + abc});
      // console.log(this.myArray);
      console.log(this.myArray);
    }
  }

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }

  // const index = this.list.indexOf(this.list[i]);
  // console.log('value: ', i, 'index: ', index);

  // @ts-ignore



  removeItem(i: number): void {
    this.myArray.splice(i, 1);
  }
  logValue(): void {
    console.log(this.myArray);
  }


}
