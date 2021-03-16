import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  addGroup: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  expandRows: EventEmitter<void> = new EventEmitter<void>();

  expandedIndex!: number;

  @Input() storeIndex!: string;
  @Input() showMinus!: boolean;

  constructor() {
    this.expandedIndex = -1;
  }
  // expandRow(index?: number): void {
  //   console.log('sub-tree expandRow: ', this.storeIndex);
  //   // @ts-ignore
  //   this.expandedIndex = this.storeIndex === this.expandedIndex ? -1 : this.storeIndex;
  //   console.log(this.expandedIndex);
  // }

  ngOnInit(): void {
    console.log(this.showMinus);
  }

}
