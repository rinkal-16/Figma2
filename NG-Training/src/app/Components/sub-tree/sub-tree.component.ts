import {Component, ElementRef, OnInit, Output, ViewChild, Input, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-sub-tree',
  templateUrl: './sub-tree.component.html',
  styleUrls: ['./sub-tree.component.scss']
})
export class SubTreeComponent implements OnInit {

  constructor() { }
  isExpanded = true;
  public list: any[] = [{
    id: 1,
    subItem: []
  }];
  itemExist = false;
  // @ts-ignore
  // tslint:disable-next-line:no-input-rename
  @Input() myinput: string | undefined;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMsg = 'I am child comp';

  ngOnInit(): void {
    console.log(this.myinput);
  }

  // tslint:disable-next-line:typedef
  sendValue(i?: string | number) {
    // @ts-ignore
    // @ts-ignore
    console.log(i);
    const xyz = this.list.includes(this.list[this.i - 1]);
    console.log(xyz);
    if (!xyz) {
      console.log('if call...');
      this.list.push({
        id: this.list.length + 1,
      });
    } else {
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

    }
    console.log(this.list);
    this.itemExist = true;
    // @ts-ignore
    this.myOutput.emit(this.list);
  }

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }

  // const index = this.list.indexOf(this.list[i]);
  // console.log('value: ', i, 'index: ', index);

  // @ts-ignore

  addItem(i: number): void {
    // @ts-ignore
    console.log(this.l);
    const xyz = this.list.includes(this.list[this.l - 1]);
    console.log(xyz);
    // if (xyz === false) {
    //   console.log('if call...');
    //   this.list.push({
    //     id: this.list.length + 1,
    //   });
    // } else {
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
    // }
  }

  removeItem(i: number): void {
    this.list.splice(i, 1);
  }
  logValue(): void {
    console.log(this.list);
  }


}
